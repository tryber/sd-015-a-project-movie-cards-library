// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      movies.map((movie) => (
        <ul key={ movie.title }>
          <img src={ movie.imagePath } alt="filmeImg" />
          <li>{ movie.title }</li>
          <li>{ movie.subtitle }</li>
          <li>{ movie.storyline }</li>
          <li>{ movie.rating }</li>
        </ul>
      ))
    );
  }
}

export default MovieCard;
