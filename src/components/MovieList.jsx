// implement MovieList component here
import React from "react";
import MovieCard from "./MovieCard";
import '../data';

class MovieList extends React.Component {
  render(){
    const {movies} = this.props;
    return (
      <div>
        {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}

export default MovieList;