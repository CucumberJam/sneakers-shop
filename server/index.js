import express from 'express';
import 'dotenv/config';
import connectDB from "./config/db.js";
import sneakersRouter from './routes/sneakers.js';
import cors from 'cors';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use('/api/sneakers', sneakersRouter);


const start = async () => {
    try{
        await connectDB();
        app.listen(PORT,
            ()=> console.log(`Running server on: http://localhost:${PORT}`))
    }catch (e) {
        console.log(e);
    }
}
await start();