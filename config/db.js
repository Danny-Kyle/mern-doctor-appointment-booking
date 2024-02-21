const mongoose = require ('mongoose');
//my normal way
// const connectDB = async() => {
//     const connection = await mongoose.connect(process.env.MONGO_URI)
//     console.log(`Mongoose Connected securely ${connection.connection.host}`.cyan.underline.bold)
// }

// module.exports = connectDB;

//new test way
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;

connection.on("connected", ()=> {
    console.log("Mongo DB Connection Success");
});

connection.on("error", (error)=>{
    console.log("Connection Error" + error);
});

module.exports = mongoose;