import express, { Router } from 'express';
import User from '../models/User.model.js';
import { createUser } from '../controllers/create.user.js';
import { HomeUser } from '../controllers/home.user.js';
import { Users } from '../controllers/users.user.js';
import { FindUserById } from '../controllers/find.user.id.js';
import { FindUserByEmail } from '../controllers/find.user.email.js';
import { UpdateUser } from '../controllers/update.user.js';
import { DeleteUser } from '../controllers/delete.user.js';

const userRouter = express(Router());

// Routes
userRouter.post('/create',createUser)
userRouter.get('/',HomeUser)
userRouter.get('/users',Users)
userRouter.get('/users/:id',FindUserById)
userRouter.post('/users/find',FindUserByEmail)
userRouter.put('/users/update/:id',UpdateUser)
userRouter.delete('/users/delete/:id',DeleteUser)

export default userRouter;