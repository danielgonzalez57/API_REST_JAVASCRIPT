const router = require("express").Router();

const {singIn, signUp} = require("../controllers/auth.controller");

// register user
router.post("/signup", signUp);

// Login
router.post("/login", singIn);

module.exports = router;






