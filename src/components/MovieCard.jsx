// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      <section className="card-wrapper">
        <img className="movie-pic" src="" alt="" />
        <div className="movie-description">
          <h2>Titulo</h2>
          <h4>Subtitulo</h4>
          <p>Storyline</p>
        </div>
        <div className="movie-rating">
          <p>Rating</p>
        </div>
      </section>
    );
  }
}

export default MovieCard;