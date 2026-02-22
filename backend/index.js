import cors from "cors";
import express from "express";
import { sendMail } from "./mail/sendMail.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://hraver-mkrtutyun.netlify.app",
    methods: ["POST", "GET"],
    credentials: true,
  }),
);

app.post("/api", sendMail);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
