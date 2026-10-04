import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
// import { authMiddleware } from "../middlewares/auth.middleware.js";

const route = Router();

route.post("/register", registerUser);
route.post("/login", authMiddleware, loginUser);

export default route;
