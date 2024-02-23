import express  from "express";
import authMiddleware from "../middlewares/authMiddleware.js"
import User from "../models/UserModel.js"
import Doctor from "../models/DoctorModel.js"

const router = express.Router();

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
//get all users

router.get('/users', (req, res) => {
    res.send(`Hello New User`)
})

export default router