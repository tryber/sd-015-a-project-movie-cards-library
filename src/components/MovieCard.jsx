// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <span>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{storyline}</p>
        </span>
        <div>
          <h2>
            Rating
            { rating }
          </h2>
        </div>
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: {}
};
 
export default MovieCard;
