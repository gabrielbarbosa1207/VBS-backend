import express from "express"
import matches from "./matches.js"
import tournments from "./tournaments.js";
import odds from "./odds.js"

const routes = (app) =>{
    app.use(
        express.json(),
        odds,
        matches,
        tournments,
    )
}

export default routes;