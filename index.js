import express from "express"
import { configDotenv } from "dotenv";
import { mongoose } from "mongoose";
import colors from "cors"
import path from "path"
// import connectDB from "../config/db"
// const dbConfig = require("../config/db")
const app = express();
app.use(express.json());
configDotenv();

const connection = async () =>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongoose Connected securely ${connection.connection.host}`.cyan.underline.bold);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}



const port = process.env.PORT || 3135;

//routing for the users
// app.use()

//routing for the appointments
// app.use()

//routing for the doctors
// app.use()


app.get("/", (res, req) => res.send("Running Mate"))

app.listen(port, console.log("Running on Port: " + port));