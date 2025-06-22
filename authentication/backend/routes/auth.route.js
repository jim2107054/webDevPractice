import express, { Router } from "express";
import { Login, Logout, SignUp } from "../controllers/auth.controllers.js";
import { upload } from "../middlewares/multer.js";

const authRouter = express(Router());

authRouter.post("/signup", upload.single("image"), SignUp);
authRouter.post("/login", Login);
authRouter.post("/logout", Logout);

export default authRouter;
