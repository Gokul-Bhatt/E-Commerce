const express = require("express");
const router = express.Router();
const authcontroller  = require("../controller/auth_controller");
const authMiddleware = require("../auth-middleware")


router.route("/").get(authMiddleware,authcontroller.home);
router.route("/register").post(authcontroller.register);
module.exports = router;