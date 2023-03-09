const express = require("express");
const { home, register } = require("../controller/homeController");
const router = express.Router()

router.route("/").get(home) // api/v1/
router.route("/register").post(register)
module.exports = router;