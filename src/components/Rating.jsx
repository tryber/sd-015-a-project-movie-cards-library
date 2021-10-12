// implement Rating component here

import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rate } = this.props;
    return (
      <div className="rating">
        <p>
          { rate }
        </p>
      </div>
    );
  }
}
Rating.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rating;
