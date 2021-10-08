import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline ">{ storyline }</p>
        <Rating className="rating" rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = [{
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagepath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
}];

export default MovieCard;
