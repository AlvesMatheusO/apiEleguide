import express  from "express";
import { getProdutos, criarProduto, editarProduto ,getProdutoById } from "./controllers/produtoController.js";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Eleguide");
});

app.get("/produtos", getProdutos);

app.post("/produtos", criarProduto);

app.get("/produtos/:id", getProdutoById);

app.get("produtos/:id", editarProduto);


export default app;