const dentistController = {};

// Get Patients
dentistController.getPatients = require("./getPatients");

// Get my appointments
dentistController.getAppointments = require("./getAppointments");

// Delete my appointment
dentistController.deleteAppointment = require("./deleteAppointment");

module.exports = dentistController;