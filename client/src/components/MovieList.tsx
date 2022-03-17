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
        <div>
          <span>{movie.title}</span>
          <Poster src={movie.poster} />
        </div>
      ))}
    </Container>
  );
}

export default MovieList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const Poster = styled.img`
  width: 300px;
  height: 200px;
`;
