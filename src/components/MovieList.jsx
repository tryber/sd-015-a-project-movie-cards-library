import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieC from './MovieCard';

export class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return movies.map((elem) => <MovieC key={ elem.title } movie={ elem } />);
  }
}

MovieList.propTypes = PropTypes.shape({
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}).isRequired;

export default MovieList;
