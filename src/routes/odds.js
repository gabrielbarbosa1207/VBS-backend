import express from "express";
import oddsController from "../controller/oddsController.js";

const router = express.Router();


router
    .get("/odds", oddsController.getOdds)

export default router;