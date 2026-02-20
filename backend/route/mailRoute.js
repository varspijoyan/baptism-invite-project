import { SendMailController } from "../controller/SendMail.controller.js";
import express from "express";

const router = express.Router();
const sendMailController = new SendMailController();

router.post("/send", sendMailController.send);

export default router;
