// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
      const { nota } = this.props;

    return (
      <div>
          <span className="movie-card-rating">{ nota }</span>
      </div>
    );
  }
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;
