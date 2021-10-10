import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // const {movie} = this.props;
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className="movie-card">
        <img src={ imagePath } alt="imagem filme" className="movie-card-image" />
        {/* <h4>{ movie.title }</h4> */}
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  })).isRequired,
};
// MovieCard.defaultProps = {

// }
