// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard key={ movie.title } />
        ))}
        {movies.map(({ title, rating }) => (
          console.log(title, rating)
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  // eslint-disable-next-line react/require-default-props
  movies: {
    title: PropTypes.string,
  },
};

export default MovieList;
