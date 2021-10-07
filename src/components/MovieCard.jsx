import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// importar React ProptYpes e o arquivo rating

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    // reestruturando a constante Movie para pegar as propriedades a cima de quando um valor for atribuido a ela (no caso o array movies data.js)
    return (
      <section>
        <img src={ imagePath } alt="" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    // cria uma secton que vai ser usada como formato padrão para todos os cards com as propriedades de cada filme;
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    },
  ).isRequired,
};
// requer que as propriedades da const movie sejam do typeOf selecionado ex: string, number, booelan etc...

export default MovieCard;
// exporta o arquivo que vai ser usado em "MovieList.jsx"
