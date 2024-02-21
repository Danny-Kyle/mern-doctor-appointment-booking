const express =require ('express');
require("dotenv").config();
const port = 3235;
const colors = require ('cors');
const app = express();
app.use(express.json());
const db = require("./config/db");
const path = require ("path");

app.listen(port, console.log("Running on Port: " + port));