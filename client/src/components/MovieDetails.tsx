import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMovie } from "services/fakeMovieService";
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

  return <div>{movie?.title}</div>;
}

export default MovieDetails;
