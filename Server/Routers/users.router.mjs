import express from "express";
import { HttpError } from "../Services/http-error.mjs";
import { addUser, getUser, getAllUsers  } from "../Services/user.service.mjs";


export const usersRouter = express.Router();

// Create user
usersRouter.post('/api/users', addUser);

// Get one user
usersRouter.get('/api/users/:email', getUser);

// Get all users
usersRouter.get('/api/users', getAllUsers);

// Update user
//usersRouter.get('/api/users/:id', updateUser);





