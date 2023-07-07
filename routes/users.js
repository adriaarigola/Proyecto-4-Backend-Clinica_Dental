const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const isPatient = require("../middlewares/isPatient");
const router = express.Router();

// Create Appointment
router.post("/new-appointment", verifyToken, isPatient, userController.createaAppointment);

// Get my appointments
router.get("/appointments", verifyToken, isPatient, userController.getAppointments);

//Get my profile
router.get("/profile", verifyToken, isPatient, userController.getProfile);

//update my profile
router.put("/update-profile", verifyToken, isPatient, userController.updateProfile);

module.exports = router;