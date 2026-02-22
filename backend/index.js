import cors from "cors";
import express from "express";
import { sendMail } from "./mail/sendMail.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://hraver-mkrtutyun.netlify.app",
  }),
);

app.post("/api/send", async (req, res) => {
  try {
    const data = req.body;
    console.log("Received data:", data); // log to check
    await sendMail(data);
    res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
