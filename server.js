import express from "express";
const app = express();


import dotenv from "dotenv";

dotenv.config({
    path : "./data/config.env",
});

app.get('/', (req, res) => {
return res.send("It's just like that...");
})

app.listen(3000, () => {
    console.log(`Server is listening at the port ${process.env.PORT}`);
})