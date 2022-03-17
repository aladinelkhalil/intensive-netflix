import axios from "axios";
import { Movie } from "types";

const baseUrl = "http://localhost:8000";
const apiEndpoint = `${baseUrl}/api/movies`;

export function getMovies() {
  return axios.get<Movie[]>(apiEndpoint);
}

export function getMovie(id: string) {
  return axios.get<Movie>(`${apiEndpoint}/${id}`);
}
