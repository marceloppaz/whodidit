import express from "express";
import { db } from "./connect.js";
import cors from "cors";
import path from "path";
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//ENDPOINT
app.get("/api/", (request, response) => {
    response.send("Só vamos trabalhar com os endpoints '/criminosos'");
});

app.get("/api/criminosos", async (request, response) => {
    try {
        const criminosos = await db.collection("criminosos").find({}).toArray();
        response.send(criminosos);
    } catch (error) {
        response.status(500).send({ message: "Erro ao buscar criminosos", error });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});