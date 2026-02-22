import express from "express";
import { SendMailController } from "../controller/SendMail.controller.js";

const router = express.Router();
const sendMailController = new SendMailController();

router.post("/send", sendMailController.send);

export default router;
