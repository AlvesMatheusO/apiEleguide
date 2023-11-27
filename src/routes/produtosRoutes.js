import express  from "express";
import ProdutoController from "../controllers/produtoController.js";

const routes = express.Router();

routes.get("/produtos", ProdutoController.getProdutos);
routes.get("/produtos/:id", ProdutoController.getProdutoById);
routes.post("/produtos", ProdutoController.criarProduto);
routes.put("/produtos/:id", ProdutoController.editarProduto);
routes.delete("/produtos/:id", ProdutoController.deleteProduto);

export default routes;  