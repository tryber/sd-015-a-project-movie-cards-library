import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      movies.map((movie, index) => (
        <section key={ index }>
          <h2>{ movie.title }</h2>
          <p>{ movie.subtitle }</p>
          <p>{ movie.storyline }</p>
          <img src={ movie.imagePath } alt="Foto do filme { movie.title }" />
          <p>{ movie.rating }</p>
        </section>))
    );
  }
}

export default MovieCard;
