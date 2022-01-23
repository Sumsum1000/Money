import express from "express";
import { HttpError } from "../Services/http-error.mjs";
import { addUser, getUser } from "../Services/user.service.mjs";


export const usersRouter = express.Router();


usersRouter.get('/api/users/:userid', getUser);
usersRouter.post('/api/users', addUser);






