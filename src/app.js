import express  from "express";
import cors from 'cors';
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

app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

routes(app);


export default app;
