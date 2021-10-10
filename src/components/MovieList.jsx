// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    // const { movies } = this.props;
    return (
      <>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <h1>Movie Cards Library</h1>
      </>
    );
  }
}

export default MovieList;
