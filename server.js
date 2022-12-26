import express from 'express';
import './config/db.js';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api/auth', userRouter)

const port = process.env.SERVER_PORT || 3001;
app.listen(port, () =>console.log(`Listening on ${port}`));