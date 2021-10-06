// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const rating = this.props;
    console.log(rating);
    return (
      <div className="movie-card-rating">
        <div className="rating">{ rating.rating }</div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
