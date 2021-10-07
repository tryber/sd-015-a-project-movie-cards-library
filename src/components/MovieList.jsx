// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    // const {  } = movies;
    const { movies } = this.props;
    return movies.map(({ title }, movie) => (
      <MovieCard key={ title } movie={ movie } />
    ));
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
