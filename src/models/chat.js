import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  userId: {
    type: String,
  },
  roomId: {
    type: String,
  },
});

const Chat = mongoose.models.Chat || mongoose.model("Chat", ChatSchema);

export default Chat;
