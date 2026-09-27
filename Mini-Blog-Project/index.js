import express from "express";
import { config } from "dotenv";
import { connectionDB } from "./configs/connectDB.js";
import authRoutes from "./routes/auth.routes.js";

config();
connectionDB();
const app = express();

app.use(express.json());

app.use("/api/blog", authRoutes)

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Mini Blog Project",
  });
});

app.listen(6500, () => {
  console.log("Server is running on port 6500");
});
