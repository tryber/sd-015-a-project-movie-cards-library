import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list" movies={ movies }>
        {movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieList;
