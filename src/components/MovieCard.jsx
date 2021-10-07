import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card movie-card-body ">
        <img
          className="movie-card-image"
          src={ movie.imagePath }
          alt={ movie.subtitle }
        />
      </div>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
