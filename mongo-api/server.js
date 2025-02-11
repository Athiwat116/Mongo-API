import express from 'express';
import 'dotenv/config'
import connectDB from './config/db.js';
import AppRoute from './routes/AppRoute.js';

const app = express();

app.use(express.json());

app.use(AppRoute);

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
    connectDB();
});