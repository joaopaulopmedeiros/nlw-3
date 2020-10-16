import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
    return res.json({
        "msg": "hello world"
    });
});

export default routes;