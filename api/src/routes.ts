import express from "express";

const routes = express.Router();

import OrphanageController from "./controllers/OrphanageController";

routes.get("/orfanatos", OrphanageController.index);
routes.get("/orfanatos/:id", OrphanageController.show);
routes.post("/orfanatos", OrphanageController.post);

export default routes;