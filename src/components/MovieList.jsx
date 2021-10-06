import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const {movies} = this.props;
    return movies.map((movi) => <MovieCard key={movi.title} movie={movi}/>);
  }
}

export default MovieList;