// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import '../data';
import  PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return( 
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie = { movie } key={movie.title} />)}

      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = { movies: [] };

export default MovieList;
