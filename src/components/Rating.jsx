// implement Rating component here
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" rating={ rating }>
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number };

Rating.defaultProps = { rating: 0 };

export default Rating;