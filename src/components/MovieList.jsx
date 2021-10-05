// implement MovieList component here
import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) => (
        <MovieCard key={ movie.title } movie={ movie } />
      ))
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieList;
