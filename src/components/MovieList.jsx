// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

const getMovieList = () => data.map(
  ({ title, subtitle, storyline, rating, imagePath }, index) => (
    <MovieCard
      key={ `Movie Title ${index + 1}` }
      title={ title }
      subtitle={ subtitle }
      storyline={ storyline }
      rating={ rating }
      imagePath={ imagePath }
    />
  ),
);

export default () => (
  <section className="movie-list">
    {getMovieList()}
  </section>
);
