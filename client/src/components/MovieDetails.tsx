import styled from "styled-components";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMovie } from "services/movieService";
import { Movie } from "types";

interface RouteParams {
  id: string;
}

function MovieDetails() {
  const [movie, setMovie] = useState<Movie>();
  const { id: movieId } = useParams<RouteParams>();
  const history = useHistory();

  useEffect(() => {
    async function loadMovie() {
      try {
        const { data: movie } = await getMovie(movieId);
        setMovie(movie);
      } catch (error) {
        return history.push("/not-found");
      }
    }

    loadMovie();
  }, [history, movieId]);

  return (
    <Container>
      <Poster src={movie?.poster} />
      <Info>
        <Title>{movie?.title}</Title>
        <Description>{movie?.description}</Description>
        <Genres>
          {movie?.genres.map((genre, i) => (
            <Genre key={i}>{genre}</Genre>
          ))}
        </Genres>
      </Info>
    </Container>
  );
}

export default MovieDetails;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 24px;
  margin: 0 24px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div``;

const Poster = styled.img`
  height: 480px;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 24px;

  @media (max-width: 500px) {
    margin-top: 24px;
    text-align: center;
  }
`;

const Description = styled.p`
  width: 75%;
  margin-bottom: 24px;

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

const Genres = styled.div`
  @media (max-width: 500px) {
    text-align: center;
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
