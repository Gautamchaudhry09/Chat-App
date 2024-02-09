import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss:{
        type:String
    },
    nbf: Number,
    aud: String,
    sub:{
        type: String,
        required: true,
        
    },
    email:String,
    email_verified: {
        type:Boolean
    },
    name: {
        type:String,
        required: true
    },
    picture:{
        type: String,
        required:true
    },
    given_name:{
        type:String
    },
    family_name: String,
    iat : Number,
    jti: String

})

export const User = mongoose.model('user',userSchema);