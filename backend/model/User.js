import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    phoneNumber:{type:String},
    gender:{type:String},
    heardFrom:{type:[String]},
    city:{type:String}
})

const User =mongoose.model('User',userSchema)

export default User