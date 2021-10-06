import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return(
      <div>
        {movies.map(element => <MovieCard key={element.title} movie={element}/>)}
      </div>
    )
  }
}

export default MovieList
