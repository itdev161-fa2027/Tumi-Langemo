import express from 'express';
import connectDatabase from './config/db.js';

const app = express();

connectDatabase();

app.get('/', (req, res) => res.send('API running'));

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));