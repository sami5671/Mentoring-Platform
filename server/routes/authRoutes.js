const express = require("express");
const {
  registerUser,
  loginUser,
  generateToken,
  googleLogin,
} = require("../controllers/authController");

const router = express.Router();

router.get("/googleLogin", googleLogin);
// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/jwt", generateToken);

module.exports = router;
