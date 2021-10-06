import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const rating = this.props.rating
    return (
      <span className="rating">{rating}</span>
    );
  }
}

Rating.protoTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
