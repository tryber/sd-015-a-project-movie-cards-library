import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    //  Essa prop é um objeto contendo as propriedades: title, subtitle, storyline, imagePath e rating.
    const { movie: { title, subtitle, storyline, imagePath } } = this.props;

    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}

// propTypes
MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
  }).isRequired,
};

export default MovieCard;
