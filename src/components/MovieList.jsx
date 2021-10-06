// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } />)}
      </div>
    );
  }
}

const propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MovieList.propTypes = propTypes;
