import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { Server } from "socket.io"; //replaces (import socketIo from 'socket.io')
import { connect } from "./config/mongoSetup.js";
import { PORT } from "./config/server-config.js";
import Chat from "./models/chat.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    console.log("data.id ", data.id);
    socket.join(data.id);
  });

  socket.on("msg_send", async (data) => {
    console.log(data);
    const chat = await Chat.create({
      content: data.msg,
      userId: data.name,
      roomId: data.id,
    });
    io.to(data.id).emit("msg_rev", data);
    console.log("data ", data);
  });
});

app.set("view engine", "ejs");
app.use("/", express.static(__dirname + "/public"));
app.get("/chats/:id", async (req, res) => {
  const chats = await Chat.find({
    roomId: req.params.id,
  });
  res.render("index", {
    id: req.params.id,
    chats: chats,
  });
});
httpServer.listen(PORT, async () => {
  await connect();
  console.log("Running on : ", PORT);
});
