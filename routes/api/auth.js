const express = require("express");

const router = express.Router();

const { validation, ctrlWrapper, authenticate, upload } = require("../../middlewares");

const { registerSchema, loginSchema, verifyEmailSchema } = require("../../models");

const { email } = require("../../services");

const ctrl = require("../../controllers/auth");

router.post("/register", validation(registerSchema), ctrlWrapper(ctrl.register));

router.post("/login", validation(loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

router.get("/verify/:verificationToken", ctrlWrapper(email.verifyEmail));

router.post("/verify", validation(verifyEmailSchema), ctrlWrapper(email.resendVerifyEmail));

module.exports = router;
