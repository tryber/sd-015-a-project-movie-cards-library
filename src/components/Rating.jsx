// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className='rating'>{rating}</p>
    )
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}

Rating.defaultProps = {
  rating: 0,
}

export default Rating;
