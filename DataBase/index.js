import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.model.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URL

// Middleware
app.use(express.json());

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.log("Error occured",error);
    }
}

// Routes
app.post('/create', async (req, res) =>{
    const {name,age,email,userName,password} = req.body;
    try{
        const user = await User.create({
            name,
            age,
            email,
            userName,
            password
        })
        res.status(201).json({message:"User created successfully", user})

    }catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
})

app.get('/',(req,res)=>{
    res.send("Welcome to the Backend part.")
})

app.get('/users',async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json({message:"Users fetched successfully", users})
    }
    catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
})

app.get('/users/:id', async (req,res)=>{
    const {id} = req.params;// destructuring the id from params
    try{
        const existUser = await User.findById(id);
        if(!existUser){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"user fetched successfully", existUser})
    }
    catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
})

app.post('/users/find', async (req,res)=>{
    const {email} = req.body;
    try{
        const existUser = await User.findOne({email});
        if(!existUser){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({existUser})
    }
    catch(error){
        console.log("Error occured",error);
        res.status(500).json({message:"Internal server error",error})
    }
})


app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})