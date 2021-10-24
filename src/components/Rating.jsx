import React from 'react';
import propTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span>{rating}</span>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.string,
}.isRequired;

export default Rating;
