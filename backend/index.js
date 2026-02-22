import cors from "cors";
import express from "express";
import { sendMail } from "./mail/sendMail.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true,
  }),
);

app.post("/api", sendMail);
api.get("/api", (req, res) => {
  res.send("Hello from the backend!");
});
