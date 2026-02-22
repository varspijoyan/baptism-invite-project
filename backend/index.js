import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "https://hraver-mkrtutyun.netlify.app", // <-- NO trailing slash
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true, // if you use cookies/auth
}));

app.get("/", (req, res) => {
  res.send("Backend is alive");
});

app.post("/api/send", (req, res) => {
  // handle form submission
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));