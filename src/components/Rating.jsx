import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

const propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = propTypes;

export default Rating;
