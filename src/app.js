import express  from "express";
import connectDatabase from "./config/dbconnect.js";
import { getProdutos, criarProduto, editarProduto, getProdutoById, deleteProduto } from "./controllers/produtoController.js";



const connection = await connectDatabase();

connection.on("Error", (erro) => {
    console.error("erro de conexão ", erro);
});

connection.once("open", () => {
    console.log("Conexao com banco feita com sucesso")
}); 

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Eleguide");
});

app.get("/produtos", getProdutos);

app.post("/produtos", criarProduto);

app.get("/produtos/:id", getProdutoById);

app.put("/produtos/:id", editarProduto);

app.delete("/produtos/:id", deleteProduto); 




export default app;
