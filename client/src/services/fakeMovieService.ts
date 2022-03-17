import { Movie, Category } from "types";

const movies: Movie[] = [
  {
    _id: "1",
    category: Category.MOVIE,
    title: "The Shawshank Redemption",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX674_.jpg",
    genres: [
      {
        _id: "10",
        name: "Drama",
      },
    ],
  },
  {
    _id: "2",
    category: Category.MOVIE,
    title: "The Godfather",
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg",
    genres: [
      {
        _id: "10",
        name: "Drama",
      },
      {
        _id: "11",
        name: "Crime",
      },
    ],
  },
  {
    _id: "3",
    category: Category.MOVIE,
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY720_.jpg",
    genres: [
      {
        _id: "10",
        name: "Drama",
      },
      {
        _id: "11",
        name: "Crime",
      },
      {
        _id: "12",
        name: "Action",
      },
    ],
  },
  {
    _id: "4",
    category: Category.SERIES,
    title: "Planet Earth II",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_FMjpg_UY720_.jpg",
    genres: [
      {
        _id: "13",
        name: "Documentary",
      },
    ],
  },
  {
    _id: "5",
    category: Category.SERIES,
    title: "Breaking Bad",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX968_.jpg",
    genres: [
      {
        _id: "10",
        name: "Drama",
      },
      {
        _id: "11",
        name: "Crime",
      },
      {
        _id: "14",
        name: "Thriller",
      },
    ],
  },
  {
    _id: "6",
    category: Category.SERIES,
    title: "Band of Brothers",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_FMjpg_UX485_.jpg",
    genres: [
      {
        _id: "10",
        name: "Drama",
      },
      {
        _id: "15",
        name: "History",
      },
      {
        _id: "16",
        name: "War",
      },
    ],
  },
  {
    _id: "7",
    category: Category.SERIES,
    title: "The Wire",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX960_.jpg",
    genres: [
      {
        _id: "10",
        name: "Drama",
      },
      {
        _id: "11",
        name: "Crime",
      },
      {
        _id: "14",
        name: "Thriller",
      },
    ],
  },
  {
    _id: "8",
    category: Category.SERIES,
    title: "Chernobyl",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UY720_.jpg",
    genres: [
      {
        _id: "10",
        name: "Drama",
      },
      {
        _id: "15",
        name: "History",
      },
      {
        _id: "14",
        name: "Thriller",
      },
    ],
  },
  {
    _id: "9",
    category: Category.MOVIE,
    title: "Schindler's List",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UY720_.jpg",
    genres: [
      {
        _id: "10",
        name: "Drama",
      },
      {
        _id: "15",
        name: "History",
      },
    ],
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id: string) {
  return movies.find((m) => m._id === id);
}
