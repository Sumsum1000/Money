import express from "express";
import mongoose from "mongoose";
import { usersRouter } from "./Routers/users.router.mjs";
import { kidsRouter } from "./Routers/kids.router.mjs";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', usersRouter);
//app.use('/', kidsRouter);

// app.use((error, req, res, next) => {
//     if (res.headerSent) {
//         return next(error);
//     }
//     res.status(error.code || 500);
//     res.json({message: error.message || 'An unknown error occurd!'})
// })


const url = 'mongodb+srv://Niko_4001:eQqDLVwHthqTTgYL@cluster0.oqvv4.mongodb.net/users?retryWrites=true&w=majority'

const port = process.env.PORT || 8080;

mongoose.connect(url)
.then(() => {
    app.listen(port);
}).catch(() => {
    console.log('Connection failed');
});


console.log("Server is listening on http://localhost:8080!");