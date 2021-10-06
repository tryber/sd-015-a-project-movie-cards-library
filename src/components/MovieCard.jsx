import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    //  Essa prop é um objeto contendo as propriedades: title, subtitle, storyline, imagePath e rating.
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <div>
        <img src={ imagePath } alt={title} />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
