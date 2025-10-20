import express from "express";
import dotenv from "dotenv";
import comidasRoutes from './src/routes/comidasRoutes.js'

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("servidor funcionando...")
});

app.use('/comidas', comidasRoutes)
app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort}`);
});
