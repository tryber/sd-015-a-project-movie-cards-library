import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const cardList = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <main className="main">
        <section className="movie-list">
          { cardList }
        </section>
      </main>
    );
  }
}

export default MovieList;
