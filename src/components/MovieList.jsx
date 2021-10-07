import Movies from '../data';
import React from 'react';
import MovieCard from '.MovieCard'

class MovieList extends React.Component {
  render() {
    // pego meu props com meu array de objetos já sinalizado no app.js
    const {filmes} = this.props;
    return (
      <div>
        {
        // faço uma iteração usando map para capturar os valores 'movie'(objeto), movie.title(string), 
        // a minha imagem, movie.imagepath e meu rating(number), retornando um novo array via map
        filmes.map((movie) => (
          <MovieCard
            movie= {movie}
            key={movie.title}
            img= {movie.imagePath}
            rating= {movie.rating}
          />))
        }
      </div>
    )
  }
}
export default MovieList;