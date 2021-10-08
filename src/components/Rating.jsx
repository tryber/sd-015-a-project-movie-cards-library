import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';

class Rating extends React.Component {
  render() {
    const { rating } = movies;
    return (
      <div className="rating" rating={ rating }>
        <p>{rating}</p>
      </div>
    );
  }
}

Rating.defaultProps = {
  rating: 0,
};

Rating.propType = {
  rating: PropTypes.number,
};

export default Rating;
