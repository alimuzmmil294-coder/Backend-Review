import { config } from "dotenv";
import express from "express";
import { DBconnection } from "./src/config/dbconnection.js";
import authRoute from "./src/routes/auth.route.js";

config();
DBconnection();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is the Mini-Blog-Project Review!",
    success: true,
  });
});

app.use("/api", authRoute);

app.listen(3300, () => {
  console.log("Mini-Blog-Project Review is running on 3300");
});
