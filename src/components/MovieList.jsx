// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

export default () => (
  <section>
    {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
  </section>
);
