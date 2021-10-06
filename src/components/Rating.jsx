// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <footer className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </footer>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
