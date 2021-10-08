import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((item) => (
          <MovieCard
            movie={ item }
            key={ item.title }
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
