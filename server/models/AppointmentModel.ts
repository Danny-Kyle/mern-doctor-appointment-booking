import mongoose  from "mongoose";
const AppointmentSchema = new mongoose.Schema({})

const appointmentModel = mongoose.model("Appointments", AppointmentSchema);
module.exports = appointmentModel;