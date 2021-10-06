import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-list">
        { movie.map((movies) => (
          <MovieCard key={ movies.title } movies={ movies } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieList;
