// implement MovieList component here
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// https://pt-br.reactjs.org/docs/lists-and-keys.html
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className = "movie-list">
        { movies.map((movie) => <MovieCard key = { movie.title } movie = { movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
