const userController = {};


// Create appointment
userController.createaAppointment = require("./createAppointment");

//Get appointments
userController.getAppointments = require("./getAppointments");

// Show profile
userController.getProfile = require("./getProfile");

// Update profile
userController.updateProfile = require("./updateProfile");

module.exports = userController;