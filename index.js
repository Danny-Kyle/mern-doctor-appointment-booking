import express from "express"
const app = express();
require("dotenv").config();
import db from "./config/db"
const port = 3235;
const colors = require ('cors');
app.use(express.json());
const path = require ("path");

//routing for the users
// app.use()

//routing for the appointments
// app.use()

//routing for the doctors
// app.use()


app.listen(port, console.log("Running on Port: " + port));