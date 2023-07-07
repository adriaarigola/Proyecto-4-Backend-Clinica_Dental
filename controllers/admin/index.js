const adminController = {};

//Get for Admin
adminController.getAll = require("./getAll");
adminController.findByPk = require("./findByPk.js");

//Dentists
adminController.getDentists = require("./getDentists");

// Patients
adminController.getPatients = require("./getPatients");

//Update User
adminController.updateUser = require("./updateUser");

module.exports = adminController;