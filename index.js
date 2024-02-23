import express from "express"
import { configDotenv } from "dotenv";
import { mongoose } from "mongoose";
import colors from "cors"
import path from "path"
const app = express();
app.use(express.json());
configDotenv();
const port = process.env.PORT || 3135;

const connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongoose Connected securely ${connection.connection.host}`.cyan.underline.bold);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

app.get("/", (res, req) => res.send("Running Mate"))

app.listen(port, ()=>{
    connection();
    console.log("Running on Backend Port: " + port);
});



//routing for the users
// app.use()

//routing for the appointments
// app.use()

//routing for the doctors
// app.use()

