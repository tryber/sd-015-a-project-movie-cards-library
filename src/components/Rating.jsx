// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{rating}</div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
