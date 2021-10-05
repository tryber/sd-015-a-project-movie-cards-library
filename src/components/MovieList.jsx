import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const filmes = movies.map((movie) => (
      <MovieCard
        key={ movie.title }
        movie={ movie }
        rating={ movie.rating }
      />
    ));
    return <div className="movie-list">{filmes}</div>;
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imagePath: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      rating: PropTypes.number,
      storyline: PropTypes.string,
    }),
  ).isRequired,
};
