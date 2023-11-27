import express  from "express";
import connectDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";


const connection = await connectDatabase();

connection.on("Error", (erro) => {
    console.error("erro de conexão ", erro);
});

connection.once("open", () => {
    console.log("Conexao com banco feita com sucesso")
}); 

const app = express();

routes(app);


export default app;
