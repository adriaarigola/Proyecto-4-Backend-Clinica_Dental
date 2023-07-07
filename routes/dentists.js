const express = require("express");
const dentistController = require("../controllers/dentist");
const verifyToken = require("../middlewares/verifyToken");
const isDentist = require("../middlewares/isDentist");
const router = express.Router();

//Get my patients
router.get("/patients", verifyToken, isDentist, dentistController.getPatients);

// Get my appointments
router.get("/my-appointments", verifyToken, isDentist, dentistController.getAppointments);

// Delete appointment
router.delete("/delete-appointment", verifyToken, isDentist, dentistController.deleteAppointment);

module.exports = router;