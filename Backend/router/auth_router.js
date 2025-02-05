const express = require("express");
const router = express.Router();
const authcontroller  = require("../controller/auth_controller");


router.route("/").get(authcontroller.home);
router.route("/register").post(authcontroller.register);
module.exports = router;