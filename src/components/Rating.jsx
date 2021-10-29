// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

Rating.defaultProps = { rating: 0 };
Rating.propTypes = { rating: PropTypes.number };
