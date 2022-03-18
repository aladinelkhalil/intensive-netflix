import axios from "axios";
import { Movie } from "types";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://intensive-netflix.herokuapp.com"
    : "http://localhost:8000";

const apiEndpoint = `${baseUrl}/api/movies`;

export function getMovies() {
  return axios.get<Movie[]>(apiEndpoint);
}

export function getMovie(id: string) {
  return axios.get<Movie>(`${apiEndpoint}/${id}`);
}

export function createMovie(movie: Movie) {
  return axios.post<Movie>(apiEndpoint, movie);
}
