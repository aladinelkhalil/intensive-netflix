import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import movies from "routes/movies";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/movies", movies);

mongoose
  .connect("mongodb://localhost/intensive-netflix")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((error) => console.log("Could not connect to MongoDB!", error));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
