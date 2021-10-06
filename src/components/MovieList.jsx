import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div key="movieList" className="movie-list">
        {movies.map((thisMovie) => (
          <MovieCard key={ thisMovie.title } movie={ thisMovie } />
        ))}
      </div>
    );
  }
}

export default MovieList;
