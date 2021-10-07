import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// MovieList.defaultProps = {
//   movie: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: "titulo do filme",
//       subtitle: "sub-titulo do filme",
//       storyline: "resenha",
//       rating: 0,
//       imagePath: "imagem do filme",
//     })
//   ).isRequired,
// };

// MovieList.propTypes = {
//   movie: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       subtitle: PropTypes.string,
//       storyline: PropTypes.string,
//       rating: PropTypes.number,
//       imagePath: PropTypes.string,
//     }),
//   ).isRequired,
// }
