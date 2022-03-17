import joi from "joi";
import mongoose from "mongoose";
import { Category, Movie as IMovie, Genre } from "types";

const categories = Object.values<Category>(Category);
const genres = Object.values<Genre>(Genre);

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2,
    required: true,
  },
  description: {
    type: String,
    minlength: 25,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  genres: {
    type: [{ type: String, enum: genres, required: true }],
    required: true,
  },
  category: {
    type: String,
    enum: categories,
    required: true,
  },
});

export const Movie = mongoose.model("Movie", movieSchema);

export function validate(movie: IMovie) {
  const schema = joi.object({
    title: joi.string().min(2).required(),
    description: joi.string().min(25).required(),
    poster: joi.string().required(),
    genres: joi
      .array()
      .items(
        joi
          .string()
          .valid(...genres)
          .required()
      )
      .required(),
    category: joi
      .string()
      .valid(...categories)
      .required(),
  });
  return schema.validate(movie);
}
