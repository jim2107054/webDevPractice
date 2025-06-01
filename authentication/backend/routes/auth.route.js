import express, { Router } from 'express';
import { Login, SignUp } from '../controllers/auth.controllers.js';

const authRouter = express(Router());

authRouter.post("/signup",SignUp)
authRouter.post("/login",Login)

export default authRouter;