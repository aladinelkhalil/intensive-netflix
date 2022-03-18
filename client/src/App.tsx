import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminLogin from "components/AdminLogin";
import MovieDetails from "components/MovieDetails";
import MovieList from "components/MovieList";
import Navbar from "components/Navbar";
import NotFound from "components/NotFound";
import AdminContext from "contexts/AdminContext";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <Switch>
        <Route path="/admin">
          <AdminLogin />
        </Route>
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
    </AdminContext.Provider>
  );
}

export default App;
