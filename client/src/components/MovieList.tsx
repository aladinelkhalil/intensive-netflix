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
        <Poster src={movie.poster} />
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
  width: 300px;
  height: 150px;
  border-radius: 4px;
`;
