import React from 'react';
import PropTypes from 'prop-types';
import '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => (<MovieCard movie={ movie } key={ movie.title } />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = { movies: [] };

export default MovieList;
