// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section className="card-wrapper">
        <img className="movie-pic" src={ imagePath } alt="" />
        <div className="movie-description">
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <div className="movie-rating">
          <p>{rating}</p>
        </div>
      </section>
    );
  }
}

export default MovieCard;
