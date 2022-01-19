import express from "express";
import { usersRouter } from "./users.router.mjs";
import { kidsRouter } from "./kids.router.mjs";

const app = express();

app.use(express.json());

app.use('/', kidsRouter);
app.use('/', usersRouter);



app.listen(8080);
console.log("Server is listening on http://localhost:8080!");