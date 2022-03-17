import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Movie } from "types";
import { getMovies } from "services/movieService";
import { useQuery } from "hooks/useQuery";

interface Props {
  searchQuery: string;
}

function MovieList({ searchQuery }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { category: selectedCategory } = useQuery();
  const history = useHistory();

  useEffect(() => {
    async function loadMovies() {
      const { data: movies } = await getMovies();
      setMovies(movies);
    }

    loadMovies();
  }, []);

  let filteredMovies = selectedCategory
    ? movies.filter((m) => m.category === selectedCategory)
    : movies;

  filteredMovies = searchQuery
    ? filteredMovies.filter((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredMovies;

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
  row-gap: 64px;
  margin: 16px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 24px;
  }
`;

const Poster = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
