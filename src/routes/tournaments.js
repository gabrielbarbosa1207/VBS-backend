import express from "express"
import tournamentsController from "../controller/tournamentController.js";


const router = express.Router();

router
    .get("/tournaments", tournamentsController.findTournaments)
    .get("/tournaments/upcoming", tournamentsController.findUpcomingTournaments)

export default router;