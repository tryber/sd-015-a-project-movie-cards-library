// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    console.log(this.props);
    return (
      <div className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

const propTypes = {
  rating: PropTypes.number.isRequired,
};

Rating.propTypes = propTypes;
