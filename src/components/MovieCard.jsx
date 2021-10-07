// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // desestruturação do parametro recebido do movieList
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div key={ title }>
        <img src={ imagePath } alt="filmeImg" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

// fonte: https://www.codegrepper.com/code-examples/javascript/frameworks/dist/defaultProps+in+react , olhei apenas o isRequired que o lint tava engasgando.

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
