import express from "express";

export const app = express();

app.get('/', (req, res) => {
    res.send('Server is running')
});

const port = process.env.PORT || 8080;
app.use(express.static('..\Client\build'));
app.listen(port);

console.log("Server is listening on http://localhost:8080!");