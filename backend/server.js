import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './database/connectDB.js';

import userRoutes from './routes/userRoute.js';

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.use('/api/users', userRoutes);


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
