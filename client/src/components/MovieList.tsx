import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Movie } from "types";
import { getMovies } from "services/fakeMovieService";
import { useQuery } from "hooks/useQuery";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { category: selectedCategory } = useQuery();
  const history = useHistory();

  useEffect(() => {
    const movies = getMovies();
    setMovies(movies);
  }, []);

  const filteredMovies = selectedCategory
    ? movies.filter((m) => m.category === selectedCategory)
    : movies;

  return (
    <Container>
      {filteredMovies.map((movie) => (
        <Poster
          key={movie._id}
          src={movie.poster}
          onClick={() => history.push(`/${movie._id}`)}
        />
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
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
