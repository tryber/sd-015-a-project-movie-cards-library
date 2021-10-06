import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Rating extends Component {
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
  rating: PropTypes.number.isRequired,
};

Rating.propTypes = propTypes;

export default Rating;
