import MovieDetails from "components/MovieDetails";
import MovieList from "components/MovieList";
import Navbar from "components/Navbar";
import NotFound from "components/NotFound";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <Switch>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route path="/:id">
          <MovieDetails />
        </Route>
        <Route path="/">
          <MovieList searchQuery={searchQuery} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
