import connectToMongo from './db.js';
import express from 'express';
import cors from 'cors';

// Connect to MongoDB
connectToMongo();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes

app.use('/api/auth/',require('./routes/auth'));
app.use('/api/notes/',require('./routes/notes'));


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
