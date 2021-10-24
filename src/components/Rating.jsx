import React from 'react';

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
