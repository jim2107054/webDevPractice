import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/Db.js';
import userRouter from './routers/router.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use("/",userRouter);

app.listen(port,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})