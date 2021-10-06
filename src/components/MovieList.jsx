// implement MovieList component here
import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie}/>)}
      </section>
    );
  }
}

export default MovieList;
