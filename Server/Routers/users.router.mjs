import express from "express";
import { HttpError } from "../Services/http-error.mjs";
import { addUser, getUser, getAllUsers, updateUser, login  } from "../Services/user.service.mjs";
import { getKidByUserId } from "../Services/user.service.mjs";


export const usersRouter = express.Router();

// Create user
usersRouter.post('/api/users', addUser);

// Get one user
usersRouter.get('/api/users/:id', getUser);

// Get all users
usersRouter.get('/api/users', getAllUsers);

// Update user
usersRouter.patch('/api/users/:id', updateUser);
 // get KidBY user
 usersRouter.get('/api/users/kids/:user', getKidByUserId)

// Add kid
//usersRouter.get('/api/users', addKid);

// Login
usersRouter.post('/api/login', login);





