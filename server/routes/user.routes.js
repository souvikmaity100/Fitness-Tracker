import express from "express";
import { registerUser, loginUser, getUserDashboard } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.get("/dashboard", verifyJWT, getUserDashboard);

export default router;
