import express from "express";
import { get } from "../controllers/HomeController.js";

const router = express.Router();

router.get("/", get);

export default router;
