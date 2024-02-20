const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        workEmail: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
        website: {
            
        }
    }
)