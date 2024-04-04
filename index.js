import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { mongoDBURL } from "./config.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
app.use(express.json()); // parse incoming requests with JSON payloads

const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET','PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use('/books', bookRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB successfully!");
    app.listen(port, () => {
      console.log(`Server is
       running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB.", err);
  });
