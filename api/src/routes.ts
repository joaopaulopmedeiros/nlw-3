import express from "express";
import multer from "multer";

import uploadConfig from "./config/upload";

const upload = multer(uploadConfig);

const routes = express.Router();

import OrphanageController from "./controllers/OrphanageController";

routes.get("/orfanatos", OrphanageController.index);
routes.get("/orfanatos/:id", OrphanageController.show);
routes.post("/orfanatos", upload.array("images") , OrphanageController.post);

export default routes;