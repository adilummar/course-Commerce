import mongoose from "mongoose";

const schema = mongoose.schema({
  title: {
    type: String,
    required: [true, "please enter your course title"],
    minLength: [4, "title must be at least 4 characters"],
    maxLength: [80, "title can't exceed 80 characters"],
  },
  description: {
    type: String,
    required: [true, "please enter your course title"],
    minLength: [20, "title must be at least 20 characters"],
  },
  video: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        requierd: true,
      },
    },
  ],
});

export const Course = mongoose.model("Course", schema);
