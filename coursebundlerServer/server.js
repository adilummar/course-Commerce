import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port number ${process.env.PORT}`)
})