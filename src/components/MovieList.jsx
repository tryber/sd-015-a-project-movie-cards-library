// implement MovieList component here
import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class Movies extends React.Component {
  render() {
    return (
      <main>
        <section className=".movie-list">
          <MovieCard />
        </section>
      </main>
    );
  }
}

export default Movies;
