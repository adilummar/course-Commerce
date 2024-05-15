// imports 
import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";

// routes import 
import course from "./routes/courseRoutes.js"
import user from  "./routes/userRoutes.js"

// config 
config({
    path:"./config/config.env"
})

const app = express()

// routes 
app.use("/api/v1",course)
app.use("/api/v1",user)

export default app;

app.use(ErrorMiddleware)