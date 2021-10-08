// implement MovieList component here
import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        <header>
          <h1>Movie Cards Library</h1>
        </header>
        <div className="movie-list">
          {movies.map(({ title }, movie) => (
            <MovieCard key={ title } movie={ movie } />
          ))}
          ;
        </div>
      </>
    );
  }
}

export default MovieList;
