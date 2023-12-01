import express  from "express";
import produtos from "./produtosRoutes.js";
import users from "./usersRoutes.js"

const routes = (app) => {
app.route("/").get((req, res) => res.status(200).send("Produtos Eleguide"));

app.use(express.json(), produtos);
app.use(express.json(), users);


};

export  default routes;
