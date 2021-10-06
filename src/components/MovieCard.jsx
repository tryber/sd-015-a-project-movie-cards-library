// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const {
      movie: { imagePath, title, subtitle, storyline, rating },
    } = this.props;
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={ imagePath }
          alt="ilustration-movie"
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={ rating } />
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
  }).isRequired,
};

// MovieCard.defaultProps = { // -> COMO FOI USADO isRequired NO MOVIECARD.PROPTYPES, O DEFAULT NÃO É NECESSÁRIO!
//   movie: {
//     title: '',
//     subtitle: '',
//     storyline: '',
//     rating: 0,
//     imagePath: '',
//   }
// }

export default MovieCard;
