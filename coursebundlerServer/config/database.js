import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb is connected with ${connection.host}`)
    }catch(error){
        console.error("error connecting to mongodb",error.messsage)
    }
}

