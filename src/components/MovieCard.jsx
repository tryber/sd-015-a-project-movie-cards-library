// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, imagePath } = movies;
    return (
      <div className="MovieCard">
        <img alt="Imagem do filme" src={ imagePath } />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movies: {
    title: 'vazio',
    subtitle: 'vazio',
    storyline: 'vazio',
    imagePath: '',
  },
};

export default MovieCard;
