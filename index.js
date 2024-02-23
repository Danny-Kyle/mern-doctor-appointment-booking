import express from "express"
import colors from "cors"
import path from "path"
import connectDB from "../config/db"
// const dbConfig = require("../config/db")
const app = express();
app.use(express.json());
require("dotenv").config();

connectDB();

const port = process.env.PORT || 3135;

//routing for the users
// app.use()

//routing for the appointments
// app.use()

//routing for the doctors
// app.use()


app.get("/", (res, req) => res.send("Running Mate"))

app.listen(port, console.log("Running on Port: " + port));