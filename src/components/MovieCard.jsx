import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <section className="card-wrapper">
        <img className="movie-pic" src={ imagePath } alt="" />
        <div className="movie-description">
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <div className="movie-rating">
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

export default MovieCard;
