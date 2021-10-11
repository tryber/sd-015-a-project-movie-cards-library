import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-list">
        {
          movie.map((element) => (
            <MovieCard key={ element.title } movie={ element } />
          ))
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
