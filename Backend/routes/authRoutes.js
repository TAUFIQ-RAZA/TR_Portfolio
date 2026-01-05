const express = require("express");
const { register, login } = require("../controllers/authController");
const protect = require("../middleware/authMiddlewares");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Test protected route
router.get("/profile", protect, (req, res) => {
  res.json({ message: "Profile accessed", userId: req.user });
});

module.exports = router;
