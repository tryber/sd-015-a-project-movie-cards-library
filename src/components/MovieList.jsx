import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './components/MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {
          movies.map(() => (<MovieCard key="" />))
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
