import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const listaDeFilmes = this.props.movies;
    return({
      listaDeFilmes.map((filme) => {
        return(
          <MovieCard mov={ filme } />
        )
      })
    });
  }
}

export default MovieList;
