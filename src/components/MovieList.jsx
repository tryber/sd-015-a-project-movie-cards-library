import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // const movies = this.props.movies
    const { movies } = this.props;
    return (
      <div>
        { movies.map((elemento) => (
          <MovieCard key={ elemento.title } movie={ elemento } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
