import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";

const route = Router();

route.post("/auth/register", registerUser);

export default route;
