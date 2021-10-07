import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import do react e do propTypes

class Rating extends Component {
  render() {
    const { rating } = this.props;
    // reestruturando o parametro rating pra pegar as propriedades dele.
    return (
      <p className="rating">{ rating }</p>
    );
  }
}
// retorna o rating embaixo do card do filme

Rating.propTypes = {
  rating: PropTypes.number,
  // exige que o Typeof rating seja um numero (no caso a nota do filme)
}.isRequired;

export default Rating;
// exporta o arquivo.
