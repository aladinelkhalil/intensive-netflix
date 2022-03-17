import { Movie } from "types";

const movies: Movie[] = [
  {
    _id: "1",
    title: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
    genre: {
      _id: "10",
      name: "Drama",
    },
  },
  {
    _id: "2",
    title: "The Godfather",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg",
    genre: {
      _id: "11",
      name: "Crime",
    },
  },
  {
    _id: "3",
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY720_.jpg",
    genre: {
      _id: "12",
      name: "Action",
    },
  },
  {
    _id: "4",
    title: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
    genre: {
      _id: "10",
      name: "Drama",
    },
  },
  {
    _id: "5",
    title: "The Godfather",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg",
    genre: {
      _id: "11",
      name: "Crime",
    },
  },
  {
    _id: "6",
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY720_.jpg",
    genre: {
      _id: "12",
      name: "Action",
    },
  },
  {
    _id: "7",
    title: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
    genre: {
      _id: "10",
      name: "Drama",
    },
  },
  {
    _id: "8",
    title: "The Godfather",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg",
    genre: {
      _id: "11",
      name: "Crime",
    },
  },
  {
    _id: "9",
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY720_.jpg",
    genre: {
      _id: "12",
      name: "Action",
    },
  },
];

export function getMovies() {
  return movies;
}
