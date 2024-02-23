import express from "express";
import { configDotenv } from "dotenv";
import { mongoose } from "mongoose";
import colors from "cors";
import path from "path";
const app = express();
app.use(express.json());
configDotenv();

// const connection = async () =>{
//     try{
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log(`Mongoose Connected securely ${connection.connection.host}`.cyan.underline.bold);
//     }catch(error){
//         console.log(error);
//         process.exit(1);
//     }
// }

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

app.get("/", (req, res) => {
  res.send("Running Mate");
});

app.listen(3235, () => {
  // connection();
  console.log(`Running on Backend Port`);
});

//routing for the users
// app.use()

//routing for the appointments
// app.use()

//routing for the doctors
// app.use()
