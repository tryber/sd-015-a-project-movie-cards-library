import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
        </div>
        <Rating className="movie-card-rating" rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    imagePath: propTypes.string,
    rating: propTypes.number,
  }),
  title: propTypes.string,
  subtitle: propTypes.string,
  storyline: propTypes.string,
  imagePath: propTypes.string,
  rating: propTypes.number,
};

MovieCard.defaultProps = {
  movie: propTypes.object,
  title: '',
  subtitle: '',
  storyline: '',
  imagePath: '',
  rating: 0,
};

export default MovieCard;
