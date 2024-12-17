import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name: {type: String, required: true},
   email: {type: String, required: true, unique: true},
   password: {type: String, required: true},
   gender: {type: String, required: true},
   username: {type: String, required: true}

}, {timeStamps: true})

export const User = mongoose.model("User", userSchema)