import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());//it tells the server to parse incoming JSON requests
app.use(cors({
  origin:process.env.CLIENT_URL// Allow requests from the client URL specified in the environment variables
  ,credentials:true // Allow credentials (cookies, authorization headers, etc.) to be sent with requests    
})); // Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cookieParser()); // Middleware to parse cookies from the request headers


// Define routes
app.use("/api",authRouter)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
