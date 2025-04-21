import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.log("Error occured",error);
    }
}

export default connectDB;