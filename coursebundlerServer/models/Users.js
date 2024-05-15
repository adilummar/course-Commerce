import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    minLength: [6, "password should be at least 6 charecters"],
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  subsciption: {
    id: String,
    status: String,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      requierd: true,
    },
  },
  playList: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
      },
      poster: String,
    },
  ],
  createdAt:{
    type:Date,
    dafault:Date.now
  },
  ResetPasswordToken:String,
  ResetPasswordExpire:String
});

export const User = mongoose.model("User", schema);
