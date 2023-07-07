const express = require("express");
const adminController = require("../controllers/admin/index");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const router = express.Router();

//Get All
router.get("/users", verifyToken, isAdmin, adminController.getAll);

//Get Dentists
router.get("/dentists", verifyToken, isAdmin, adminController.getDentists);

//Get Patients
router.get("/patients", verifyToken, isAdmin, adminController.getPatients);

//Get user by id
router.get("/user/:id", verifyToken, isAdmin, adminController.findByPk);

//Update User
router.put("/update-user/:id", verifyToken, isAdmin, adminController.updateUser);


module.exports = router;