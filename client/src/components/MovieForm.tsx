import { useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import { Category, Genre, Movie } from "types";
import { createMovie } from "services/movieService";
import AdminContext from "contexts/AdminContext";

interface Props {
  category: Category;
}

interface FormData {
  title: string;
  description: string;
  poster: string;
  genres: Genre[];
}

function MovieForm({ category }: Props) {
  const { register, handleSubmit } = useForm<FormData>();
  const { isAdmin } = useContext(AdminContext);
  const history = useHistory();

  if (!isAdmin) return <Redirect to="/" />;

  async function doSubmit(data: FormData) {
    const movie: Movie = { category, ...data };
    await createMovie(movie);
    history.push("/");
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(doSubmit)}>
        <h1>New {category === Category.MOVIE ? "Movie" : "Series"}</h1>
        <FormGroup>
          <label htmlFor="title">Title</label>
          <input id="title" {...register("title")} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <input id="description" {...register("description")} />
        </FormGroup>
        <FormGroup>
          <label htmlFor="poster">Poster</label>
          <input id="poster" {...register("poster")} />
        </FormGroup>
        <Checkboxes>
          <label>Genres</label>
          {Object.values(Genre).map((genre) => (
            <div key={genre}>
              <input
                id={genre}
                type="checkbox"
                value={genre}
                {...register("genres")}
              />
              <label htmlFor={genre}>{genre}</label>
            </div>
          ))}
        </Checkboxes>
        <Button>Save</Button>
      </Form>
    </Container>
  );
}

export default MovieForm;

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Form = styled.form`
  padding: 8px;
  width: 500px;

  & > h1 {
    margin-bottom: 24px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  & > label {
    margin-bottom: 8px;
  }

  & > input {
    width: 50%;
    height: 24px;
    color: black;
    outline: none;
    padding-left: 8px;
  }
`;

const Checkboxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 24px;
  width: 50%;

  & > div {
    margin-top: 8px;
  }

  & > label {
    grid-column: 1 / span 2;
  }

  & > div > label {
    font-size: 14px;
  }

  & > div > input {
    margin-right: 8px;
  }
`;

const Button = styled.button`
  width: 80px;
  color: white;
  background-color: #e50914;
  border: none;
  border-radius: 2px;
  padding: 8px;
  cursor: pointer;
`;
