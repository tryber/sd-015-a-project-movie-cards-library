import React from 'react';
import movies from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      movies.map((movie, index) => (
        <section key={ index } className="movie-card">
          <img src={ movie.imagePath } alt="Foto do filme { movie.title }" />
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
          <Rating />
        </section>))
    );
  }
}

export default MovieCard;
