const router = require("express").Router();
const {
  registerUser,
  loginUser,
  GetMe,
} = require("../controller/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", GetMe);

module.exports = router;
