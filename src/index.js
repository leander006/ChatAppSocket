import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { Server } from "socket.io"; //replaces (import socketIo from 'socket.io')

import { PORT } from "./config/server-config.js";
// const PORT = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// const io = socketio(server);
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Hello user ", socket.id);
});

app.use("/", express.static(__dirname + "/public"));

httpServer.listen(PORT, function () {
  console.log("Running on : ", PORT);
});
