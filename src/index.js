import express from "express";
import { PORT } from "./config/server-config.js";

const app = express();

app.listen(PORT, (req, res) => {
  console.log(`Server running on PORT ${PORT}`);
});
