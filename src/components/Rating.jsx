import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="rating">{ props.rating }</div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: -1,
};

export default Rating;
