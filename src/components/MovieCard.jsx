import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { key } = this.props;
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <div className="movie-card" key={ key }>
        <div className="movie-card-header">
          <h4 className="movie-card-title">{ title }</h4>
        </div>
        <div className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt="Movie" />
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  key: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
