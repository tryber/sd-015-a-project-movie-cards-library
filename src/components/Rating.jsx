// implement Rating component here
import React, { Component } from 'react';
import propTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Rating;
