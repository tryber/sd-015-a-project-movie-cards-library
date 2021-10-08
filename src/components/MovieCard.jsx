import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <div className="movie-card">
        <img className="movie-image" src={ imagePath } alt={ title } />
        <h4 className="movie-title">{ title }</h4>
        <h5 className="movie-subtitle">{ subtitle }</h5>
        <p className="movie-storyline">{ storyline }</p>
        <Rating className="movie-rating" rating={ rating } />
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};
