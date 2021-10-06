// implement MovieList component here

import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

function MovieList() {
  return (
    <main className="movie-list">
      {movies.map((mov, index) => <MovieCard key={ index.title } movies={ mov } />)}
    </main>
  );
}

export default MovieList;

// <div key={ mov.title } />
