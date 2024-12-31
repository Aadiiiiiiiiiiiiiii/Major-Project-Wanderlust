const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

// router.route("/signup")
// .get("/signup", userController.renderSignupForm)
// .post("/signup", wrapAsync(userController.signup));

// router.route("/login")
// .get("/login", userController.renderLoginForm)
// .post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect:"/login", failureFlash: true }), userController.Login);

router.get("/signup", userController.renderSignupForm);

router.post("/signup", wrapAsync(userController.signup));

router.get("/login", userController.renderLoginForm);

router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect:"/login", failureFlash: true }), userController.Login);

router.get("/logout", userController.Logout)

module.exports = router;