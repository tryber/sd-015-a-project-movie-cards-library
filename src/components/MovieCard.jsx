import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating'

class movieCard extends React.Component {
  render() {
    const {
      movie: {imagePath, title, subtitle, storyline, rating}
    } = this.props;
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={ imagePath }
          alt="ilustration-movie"
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <div>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

movieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired
}

export default movieCard;
