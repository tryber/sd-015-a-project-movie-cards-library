import React from 'react';
import movies from '../data';

function createImage(source) {
  return (
    <div className="movie-card">

      <img alt="" src={ source.imagePath } className="movie-card-image" />
    </div>
  );
}

class MovieCard extends React.Component {
  render() {
    return movies.map((movie) => createImage(movie));
  }
}

export default MovieCard;
