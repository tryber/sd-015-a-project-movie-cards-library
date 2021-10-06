// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    // const { movies } = this.props;
    return (
      movies.map((film) => <MovieCard key={ film.title } movie={ film } />)
    );
  }
}

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default MovieList;
