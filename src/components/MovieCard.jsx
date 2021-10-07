import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card">
          <img className="movie-card-image" src={ imagePath } alt="imagem do filme" />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <div className="rating">
            <Rating rating={ rating } />
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    title: 'sem resposta',
    subtitle: '',
    storyline: '',
    rating: undefined,
    imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjul10l1r4.github.io%2FHTTP_-_Resposta%2Fimg%2F204&f=1&nofb=1',
  }),
};

export default MovieCard;
