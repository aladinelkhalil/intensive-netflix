import { Movie, Category } from "types";

const movies: Movie[] = [
  {
    _id: "1",
    category: Category.MOVIE,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
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
    description:
      "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son",
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
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
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
    description:
      "David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.",
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
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
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
    description:
      "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
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
    description:
      "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
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
    description:
      "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
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
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
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
