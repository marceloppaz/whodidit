import express from 'express';
import { db } from './connect.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API Endpoints
app.get('/api/criminosos', async (req, res) => {
    try {
        const criminosos = await db.collection('criminosos').find({}).toArray();
        res.send(criminosos);
    } catch (error) {
        res.status(500).send({ message: 'Erro ao buscar criminosos', error });
    }
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});