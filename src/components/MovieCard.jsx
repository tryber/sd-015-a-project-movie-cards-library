import React from 'react';
import PropTypes from 'prop-types';
// import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        {null}
      </div>
    );
  }
}

const propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    },
  ).isRequired,
};

MovieCard.propTypes = propTypes;

export default MovieCard;
