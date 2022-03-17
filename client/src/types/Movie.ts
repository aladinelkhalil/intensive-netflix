import { Genre } from "types/Genre";

export interface Movie {
  _id: string;
  title: string;
  poster: string;
  genre: Genre;
}
