import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionController();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get("/controllers", connectionsController.index);
routes.post("/controllers", connectionsController.create);

export default routes;
