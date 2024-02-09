import Conversation from "../model/Conversation.js";
import Message from "../model/Message.js";


export const MessageController = {
    newMessage: async (req,res) => {
        try{
            const newMessage = new Message(req.body);
            await newMessage.save();
            await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text})
            return res.status(200).json('Message has been sent Successfully');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    getMessages: async (req,res) => {
        try{
            const id = req.params.id;
            // console.log(req.params.id);
            
            const messages = await Message.find({conversationId: id});
            console.log(messages);
            return res.status(200).json(messages);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}