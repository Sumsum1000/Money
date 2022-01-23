import express from "express";
import { usersRouter } from "./Routers/users.router.mjs";
import { kidsRouter } from "./Routers/kids.router.mjs";

const app = express();

app.use(express.json());
app.use('/', kidsRouter);
app.use('/', usersRouter);

// app.use((error, req, res, next) => {
//     if (res.headerSent) {
//         return next(error);
//     }
//     res.status(error.code || 500);
//     res.json({message: error.message || 'An unknown error occurd!'})
// })


app.listen(8080);
console.log("Server is listening on http://localhost:8080!");