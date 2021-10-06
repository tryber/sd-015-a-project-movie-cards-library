// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const { rating } = props;
  return (
    <div>
      <p>{ rating }</p>
    </div>
  );
};

Rating.proptype = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};
export default Rating;
