import express from "express";
const app = express();
app.use(express.json());

import "dotenv/config";

import mongooseConnection from "./mongoose.js";
mongooseConnection();

import cors from 'cors';
app.use(cors());

import route from "./routes/route.js";
app.use('/', route);


const URL = process.env.APP_PORT || 3500;
app.listen(URL, console.log(`Backend is running on Port: ${URL}`));
app.get('/', (req, res) => {
    res.send(`Server is on port ${URL}`)
})
