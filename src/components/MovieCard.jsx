import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

function createImage(props) {
  return (
    <section className="movie-card">
      <img alt="" src={ props.imagePath } className="movie-card-image" />
      <h4 alt="" className="movie-card-title">{props.title}</h4>
      <h5 alt="" className="movie-card-subtitle">{props.subtitle}</h5>
      <p alt="" className="movie-card-storyline">{props.storyline}</p>
      <div className="movie-card-rating">
        <Rating rating={ props.rating } />
      </div>
    </section>
  );
}

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      createImage(movie)
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
