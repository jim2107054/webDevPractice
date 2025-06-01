import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());//it tells the server to parse incoming JSON requests
app.use(cookieParser()); // Middleware to parse cookies from the request headers

app.use("/api",authRouter)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
