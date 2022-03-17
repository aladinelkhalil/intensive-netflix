import styled from "styled-components";
import { useState, useEffect } from "react";
import { getMovies } from "services/fakeMovieService";
import { Movie } from "types";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const movies = getMovies();
    setMovies(movies);
  }, []);

  return (
    <Container>
      {movies.map((movie) => (
        <Poster key={movie._id} src={movie.poster} />
      ))}
    </Container>
  );
}

export default MovieList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 4px;
  margin: 16px;
`;

const Poster = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
