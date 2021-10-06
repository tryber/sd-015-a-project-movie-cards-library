// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.map((filme) => <MovieCard key={ filme.title } movie={ filme } />)
        }
      </div>
    );
  }
}

export default MovieList;
