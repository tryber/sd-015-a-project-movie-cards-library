import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {movie.map((each) => <MovieCard key={ each.title } EachMovie={ each } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieList;
