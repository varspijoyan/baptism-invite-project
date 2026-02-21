import dotenv from "dotenv";
import express from "express";
import mailRoute from "./route/mailRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api", mailRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
