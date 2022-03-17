import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMovie } from "services/fakeMovieService";
import styled from "styled-components";
import { Movie } from "types";

interface RouteParams {
  id: string;
}

function MovieDetails() {
  const [movie, setMovie] = useState<Movie>();
  const { id: movieId } = useParams<RouteParams>();
  const history = useHistory();

  useEffect(() => {
    const movie = getMovie(movieId);

    if (!movie) return history.push("/not-found");

    setMovie(movie);
  }, []);

  return (
    <Container>
      <img src={movie?.poster} height="480" />
      <div>
        <h1>{movie?.title}</h1>
        <p>{movie?.description}</p>
        {movie?.genres.map((genre) => (
          <Genre>{genre.name}</Genre>
        ))}
      </div>
    </Container>
  );
}

export default MovieDetails;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 24px;
  margin: 0 24px;

  & h1 {
    margin-bottom: 24px;
  }

  & p {
    width: 75%;
    margin-bottom: 24px;
  }
`;

const Genre = styled.span`
  padding: 4px 8px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 16px;
  font-size: 12px;
  margin-right: 8px;
`;
