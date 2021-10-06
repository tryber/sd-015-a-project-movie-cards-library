import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { key } = this.props;
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div key={ key } className="movie-card">
        <div className="movie-card-body">
          <img src={ imagePath } alt="Movie" className="movie-card-image" />
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
          <div className="movie-card-rating ">
            <Rating rating={ rating } />
          </div>
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
