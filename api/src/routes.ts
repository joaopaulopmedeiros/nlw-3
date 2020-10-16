import express from "express";

const routes = express.Router();

import OrphanageController from "./controllers/OrphanageController";


routes.get("/", (req, res) => {
    return res.json({
        "msg": "hello world"
    });
});

routes.get("/orfanatos", OrphanageController.index);

export default routes;