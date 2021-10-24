import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {movie}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.arrayOf(propTypes.object).isRequired,
};

export default MovieCard;
