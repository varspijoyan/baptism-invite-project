import cors from "cors";
import express from "express";
import mailRoute from "./route/mailRoute.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["POST", "GET"],
     allowedHeaders: ["Content-Type"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api", mailRoute);
app.get("/api", (req, res) => {
  res.send("Hello from the backend!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
