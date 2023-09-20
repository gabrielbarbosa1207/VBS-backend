import express from "express"
import matchesController from "../controller/matchesController.js";

const router = express.Router();

router
    .get("/matches", matchesController.findMatches)
    .get("/matches/running", matchesController.findRunningMatches)
    .get("/matches/upcoming", matchesController.findUpcomingMatches)

    

export default router;