// implement MovieList component here

import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {data.map((i) => (<MovieCard
          key={ `${i.title}` }
          movie={ i }
        />))}
      </div>
    );
  }
}

export default MovieList;
