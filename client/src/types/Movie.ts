import { Genre } from "types";

export enum Category {
  MOVIE = "movie",
  SERIES = "series",
}

export interface Movie {
  _id?: string;
  title: string;
  description: string;
  poster: string;
  genres: Genre[];
  category: Category;
}
