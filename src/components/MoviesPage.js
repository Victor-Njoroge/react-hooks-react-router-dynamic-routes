import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieList from "./MovieList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match=useRouteMatch();
  console.log(match)
  return (
    <div>
      <MovieList  movies={movies} />
      <Route exact path={`${match.url}/:movieId`}><MovieShow movies={movies}/></Route>
    </div>
  );
}
export default MoviesPage;
