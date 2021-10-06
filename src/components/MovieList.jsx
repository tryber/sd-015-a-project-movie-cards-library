import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        <div>
          { movies.map((elem) => (<MovieCard
            key={ elem.title }
            movie={ elem }
          />))}
        </div>

      </section>
    );
  }
}

export default MovieList;
