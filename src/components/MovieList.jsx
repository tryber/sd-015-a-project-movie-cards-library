import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return movies.map((elem) => <MovieCard key={ elem.title } movie={ elem } />);
  }
}

MovieList.propTypes = PropTypes.shape({
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}).isRequired;

export default MovieList;
