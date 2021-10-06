import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((elem) => <MovieCard />)
    );
  }
}

// MovieList.propTypes = {
//     movies: PropTypes.Array
// };

// MovieList.defaultProps = {
//   movies: PropTypes.Array
// };

export default MovieList;
