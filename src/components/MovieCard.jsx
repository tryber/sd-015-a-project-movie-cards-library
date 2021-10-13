import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      movies.map((movie, index) => (
        <section key={ index }>
          <h4>{ movie.title }</h4>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.storyline }</p>
          <img src={ movie.imagePath } alt="Foto do filme { movie.title }" />
          <p>{ movie.rating }</p>
        </section>))
    );
  }
}

export default MovieCard;
