import express  from "express";
import authMiddleware from "../middlewares/authMiddleware.js"
import User from "../models/UserModel.js"
import Doctor from "../models/DoctorModel.js"
import Appointment from "../models/AppointmentModel.js"
import bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken";
import moment from "moment";
import appointmentModel from '../models/AppointmentModel';

const router = express.Router();

//user login
router.post("/login", async(req, res) =>{
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            return res
            .status(200)
            .send({message: "User doesn't exist", success: false})
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch){
            return res
            .status(200)
            .send({message: "Password mismatch or Password Incorrect", success: false})
        }else{
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET || "HRZHEALTHY", {
                expiresIn: "1d",
            });
            res.status(200)
                .send({message: "Login successful", success:true, data: token});
        }
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .send({message: "Error logging in", success: false, error })
    }
})






//create user
router.post("/", async(req, res)=> {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200 ).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})
//update user
//delete user
//get user

//to get all certified doctors
router.get('/get-all-certified-doctors', authMiddleware, async(req, res) => {
    try {
        const doctors = await Doctor.find({status: "approved"});
        res
            .status(200)
            .send({
                message: "Doctors Fetched",
                success: true,
                data: doctors,
            })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: `Error Fetching Doctors Accounts`,
            success: false,
            error
        })
    }
})

//get user appointments
router.get("/get-appointments-by-user-id", authMiddleware, async(req, res) => {
    try {
        const appointments = await Appointment.find({userId: req.body.userId});
        res.status(200).send({
            message: `Appointments fetched successfully`,
            success: true,
            data: appointments,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: `Error Fetching Appointments`,
            success: false,
            error,
        });
    }
});

export default router