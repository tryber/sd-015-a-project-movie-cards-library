import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component { // Componente React que se transformará em cards de filmes. Será chamado dentro do Componente React de classe 'MovieList'.
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props; // Utilizando object destructuring para captar as informações necessárias para o desenvolvimento de cada card. A props 'movie', desse componente, recebe um objeto que contêm informações de um determinado filme.

    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

// PropTypes:
MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    rating: propTypes.number,
  }).isRequired,
};

export default MovieCard;
