import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Movie } from "types";
import { getMovies } from "services/movieService";
import { useQuery } from "hooks/useQuery";
import AdminContext from "contexts/AdminContext";

interface Props {
  searchQuery: string;
}

function MovieList({ searchQuery }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { category: selectedCategory } = useQuery();
  const { isAdmin } = useContext(AdminContext);
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
      {isAdmin && (
        <>
          <AddNewMovie as="div" onClick={() => history.push("/new-movie")}>
            <i className="fa-solid fa-plus" />
            <p>New Movie</p>
          </AddNewMovie>
          <AddNewMovie as="div" onClick={() => history.push("/new-series")}>
            <i className="fa-solid fa-plus" />
            <p>New Series</p>
          </AddNewMovie>
        </>
      )}
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 64px 4px;
  margin: 16px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 24px 0;
    margin: 0;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  object-fit: fill;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    width: 150px;
  }
`;

const AddNewMovie = styled(Poster)`
  display: grid;
  place-items: center;
  border: 1px solid rgb(218, 218, 218);

  & i {
    font-size: 40px;
  }
`;
