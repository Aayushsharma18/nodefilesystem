require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const port = 27017;
const mongoose = require("mongoose");

const users = require("./mongodb/user.js");

mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("mongo db connected"));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`server running on port 27017`))