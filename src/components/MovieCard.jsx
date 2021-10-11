// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// import { movies } from '../data';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <Rating />
    );
  }
}
MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
