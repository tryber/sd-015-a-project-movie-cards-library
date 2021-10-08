// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((element) => (<MovieCard key={ element.title } movie={ element } />))}
      </div>

    );
  }
}
