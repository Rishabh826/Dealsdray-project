import express from "express";
const router = express.Router();



import {login,signup} from "../controller/user.controller.js";
import {SendOtp} from "../controller/Otp.Controller.js";


router.post("/login", login);
router.post("/signup", signup);

router.post("/sendotp", SendOtp);


export default router;
