// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      // eslint-disable-next-line max-len
      <div className="columns is-justify-content-center is-flex-wrap-wrap is-variable is-2-mobile is-0-tablet is-3-desktop is-8-widescreen is-1-fullhd">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
