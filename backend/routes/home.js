const express = require("express");
const { home } = require("../controller/homeController");
const router = express.Router()

router.route("/").get(home) // api/v1/
// router.route("/register").get(register)
module.exports = router;