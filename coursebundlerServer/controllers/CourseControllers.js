import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find().select("-lectures");
  res.status(200).json({
    success: true,
    courses,
  });
});

export const createCourse = catchAsyncError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;
  if (!title || !description || !category || !createdBy)
    return next(new ErrorHandler("please fill all the fields", 400));

  //   const file = req.file;
  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: { public_id: "temp", url: "temp" },
  });

  res.status(201).json({
    success: true,
    message: "course created successfully, you can add lectures now",
  });
});
