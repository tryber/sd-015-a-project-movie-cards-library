// implement MovieCard component here
import React from 'react';
import movies from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      movies.map((movie) => (
        <>
          <img src={ movie.imagePath } alt="CapaFilme" />
          <h4>{movie.title}</h4>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
          <Rating nota={ movie.rating } />
        </>

      ))
    );
  }
}

export default MovieCard;
