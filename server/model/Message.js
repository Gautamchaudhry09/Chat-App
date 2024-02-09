import mongoose, { mongo } from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
    conversationId:String,
    senderId:String,
    receiverId:String,
    text:String,
    type:String
    },
    {
        timestamps:true
    }
);

const Message=mongoose.model('Message',MessageSchema);

export default Message;