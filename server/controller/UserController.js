import { User } from "../model/User.js"

export const UserController = {
    addUser: async (req,res) => {
        try{
            // console.log(req.body);
            let exist = await User.findOne({sub: req.body.sub});

            if(exist) {
                res.status(200).json({msg: 'user already exist'});
                return;
            }
                const newUser = new User(req.body);
                await newUser.save();
                return res.status(200).json(newUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    getUsers: async(req,res) => {
        try{
            const users = await User.find({});
            return res.status(200).json(users);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    },
    

}