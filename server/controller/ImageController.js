

export const ImageController = {
    uploadFile: async (req,res) => {
        try{
            // const newMessage = new Message(req.body);
            // await newMessage.save();
            // await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text})
            // return res.status(200).json('Message has been sent Successfully');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },


}