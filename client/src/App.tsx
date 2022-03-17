import MovieDetails from "components/MovieDetails";
import MovieList from "components/MovieList";
import Navbar from "components/Navbar";
import NotFound from "components/NotFound";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route path="/:id">
          <MovieDetails />
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
