// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie, index) => (
          <MovieCard key={ `Movie Title ${1 + index}` } movie={ movie } />
        )) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
