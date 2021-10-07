import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // {console.log(key))}
    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string,
};

MovieCard.defaultProps = {
  movie: [],
};

export default MovieCard;
