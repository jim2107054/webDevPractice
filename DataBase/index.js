import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URL

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.log("Error occured",error);
    }
}


app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})