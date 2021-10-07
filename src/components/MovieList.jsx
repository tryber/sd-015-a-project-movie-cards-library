// implement MovieList component here
import React, { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {this.props.movies.map((e) => {
          return (
            <div>
              <MovieCard key={e.title} movie={movies} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
