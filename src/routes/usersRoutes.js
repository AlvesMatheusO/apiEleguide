import express  from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

routes.get("/users", UserController.getUsers);
routes.get("/users/:id", UserController.getUserById);
routes.post("/users", UserController.criarUser);
routes.put("/users/:id", UserController.editarUser);
routes.delete("/users/:id", UserController.deleteUser);

export default routes;  