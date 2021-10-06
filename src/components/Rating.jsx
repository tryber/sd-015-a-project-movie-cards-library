import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <h1 className="rating">{rating}</h1>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
