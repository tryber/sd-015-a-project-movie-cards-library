import React from 'react';
import PropType from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img src={ imagePath } alt={ title } className="movie-card-image" />
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    imagePath: PropType.string,
    rating: PropType.number,
  }).isRequired,
};

export default MovieCard;
