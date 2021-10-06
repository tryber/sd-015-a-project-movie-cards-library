import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((mv) => <MovieCard key={ mv.title } movie={ mv } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
