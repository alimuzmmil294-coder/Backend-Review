import { config } from "dotenv";
import express from "express";
import { DBconnection } from "./src/config/dbconnection.js";
import authRoute from "./src/routes/auth.route.js";

// Configurations
config();
DBconnection();

const app = express();
app.use(express.json());


// Routes: 
app.use("/api/auth", authRoute);


// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is the Mini-Blog-Project Review!",
    success: true,
  });
});

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Mini-Blog-Project Review is running on port ${PORT}`);
});
