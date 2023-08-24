import mongoose from "mongoose";
import { MONGO_URL } from "./server-config.js";
export const connect = async () => {
  await mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to mongodb successfully");
  });
};
