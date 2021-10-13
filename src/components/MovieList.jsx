import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <article className="movie-list">
        <MovieCard />
      </article>
    );
  }
}

export default MovieList;
