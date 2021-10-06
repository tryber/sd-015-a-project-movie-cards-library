import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        { movies.map((movie, index) => (
          <MovieCard key={ `Movie Title ${index}` } movie={ movie } />)) }
      </section>
    );
  }
}

export default MovieList;
