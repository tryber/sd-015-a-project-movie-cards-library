import React from 'react';
import Proptypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          // eslint-disable-next-line react/prop-types
          movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)
        }
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: Proptypes.arrayOf(Proptypes.object),
};

MovieList.defaultProps = {
  movies: [{}],
};
export default MovieList;
