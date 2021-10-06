// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {

  render() {
    const { data } = this.props;
    return (
      <div>
        { data.map((movieElement) => (
          <MovieCard
            name={ movieElement }
            key={ movieElement.title }
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
