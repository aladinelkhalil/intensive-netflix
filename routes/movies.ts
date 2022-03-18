import express, { Request, Response } from "express";
import { Movie, validate } from "models/Movie";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const movies = await Movie.find();
  return res.send(movies);
});

router.get("/:id", async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Invalid id");

  const movie = await Movie.findById(req.params.id);

  if (!movie)
    return res.status(404).send(`Movie with id ${req.params.id} was not found`);

  return res.send(movie);
});

router.post("/", async (req: Request, res: Response) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  let movie = new Movie(req.body);

  movie = await movie.save();

  return res.status(201).send(movie);
});

export default router;
