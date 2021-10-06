import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component { // Componente React que representa o elemento que acumula a nota de cada filme. Será chamado dentro do Componente React de classe 'MovieCard'.
  render() {
    const { rating } = this.props; // Utilizando object destructuring para captar a nota de um determinado filme.

    return (
      <span className="rating">
        { rating }
      </span>
    );
  }
}

// PropTypes:
Rating.propTypes = {
  rating: propTypes.number,
};

Rating.defaultProps = { // Caso não haja valor de rating, para um determinado filme, ele receberá nota 0.
  rating: 0,
};

export default Rating;
