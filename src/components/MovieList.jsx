import React from 'react';
import movies from '../data';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}
export default MovieList;
