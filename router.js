const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const dentistsRouter = require("./routes/dentists");

// home page
router.use("/", indexRouter);

// users
router.use("/api/users", usersRouter);

// admin
router.use("/api/admin", adminRouter);

// dentists
router.use("/api/dentists", dentistsRouter);

// authentication
router.use("/auth", authRouter);

module.exports = router;