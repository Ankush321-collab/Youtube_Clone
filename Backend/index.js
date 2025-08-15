import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Backend is running");
});

mongoose.connect(process.env.MONGO_URL, {
    dbName: "youtubeClone",
  
})
.then(() => {
    console.log("MongoDB connected: YouTube Clone");
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
})
.catch(err => console.log('MongoDB connection failed:', err.message));
