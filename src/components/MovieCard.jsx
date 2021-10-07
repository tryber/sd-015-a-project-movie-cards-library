// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="column is-one-third">
        <div className="box">
          <div className="card-image">
            <figure className="image is-3by2">
              <img src={ movie.imagePath } alt="CapaFilme" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4 className="title">{movie.title}</h4>
              <h5>{movie.subtitle}</h5>
              {movie.storyline}
            </div>
          </div>
          <Rating rating={ movie.rating } />
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
  }).isRequired,
};
export default MovieCard;
