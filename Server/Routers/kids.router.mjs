import express from "express";
import { HttpError } from "../Services/http-error.mjs";
import { addKid, getKid, getAllKids, updateKid } from "../Services/kids.service.mjs";

export const kidsRouter = express.Router();


// Create kid
kidsRouter.post('/api/kids', addKid);

// Get one kid
kidsRouter.get('/api/kids/:email', getKid);

// Get all kids
kidsRouter.get('/api/kids', getAllKids);

//kidsRouter.get('/api/kids/user/:userid', getKidByUserId)

// Update kid
kidsRouter.patch('/api/kids/:email', updateKid);

// Kid Login
// kidsRouter.post('/api/kid/login', kidLogin);


