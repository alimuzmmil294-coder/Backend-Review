import Route from "express";
import { login, signup } from "../controllers/auth.controller.js";

const route = Route();

route.post("/auth/signup", signup);
route.post("/auth/login", login);

export default route;
