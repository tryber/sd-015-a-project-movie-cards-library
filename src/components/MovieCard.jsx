import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.title } />
        <div>
          <h4>{ movie.title }</h4>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.storyline }</p>
        </div>
        <Rating rating={ movie.rating } />
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
