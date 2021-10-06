// implement Rating component here
import React, { Component } from 'react';
import propTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.number.isRequired,
};

export default Rating;
