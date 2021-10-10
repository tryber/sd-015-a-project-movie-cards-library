import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    // console.log(movies);
    return (
      <div className="movie-list">
        {
          movies.map((movie) => (
            // console.log(movie)
            <MovieCard key={ movie.title } movie={ movie } />
          ))
        }
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
