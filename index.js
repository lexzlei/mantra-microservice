import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import generateMantra from './geminiService.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.get('/mantra', async (req, res) => { 
    console.log('Received request');
    try {
        const mantra = await generateMantra();
        res.json(mantra);
    } catch (error) {
        console.error('Error generating mantra:', error);
        res.status(500).json({ error: 'Failed to generate mantra' });
    }
});

app.get('/', (req, res) => res.send("Mantra microservice is running"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});