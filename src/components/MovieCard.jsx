import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-header">
          <img className="movie-card-image" src={ imagePath } alt="movie card" />
        </div>
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    title: '',
    subtitle: '',
    storyline: '',
    imagePath: '',
    rating: 0,
  }),
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default MovieCard;
