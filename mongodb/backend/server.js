import express from "express";
import { connectToDB } from './db/connection.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectToDB();

app.get("/", (req, res) => {
    res.end("Home page");
});

app.post('/signin', (req, res) => {
    const formdata = req.body;
    console.log(formdata);
    res.end("Sign in successful");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

