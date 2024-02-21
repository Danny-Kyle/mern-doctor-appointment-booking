import mongoose  from "mongoose";
const AppointmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    doctorId: {
        type: String,
        required: true
    },
    doctorInfo: {
        type: Object,
        required: true
    },
    userInfo: {
        type: Object,
        required: true
    },
    userProblem: {
        type: String,
        required: true
    },
    meetingDate: {
        type: String,
        required: true
    },
    meetingTime: {
        type: String,
        required: true
    },
    meetingStatus: {
        type: String,
        required: true,
        default: "Not Started"
    }
},
{
    timestamps: true,
}
);

const appointmentModel = mongoose.model("Appointments", AppointmentSchema);
module.exports = appointmentModel;