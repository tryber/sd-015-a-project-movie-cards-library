// implement Rating component here
import PropTypes from 'prop-types';
import React from 'react';
// import data from '../data';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating" rating={ rating }>
        { rating }
      </div>
    );
  }
}
Rating.propTypes = { rating: PropTypes.number };
Rating.defaultProps = { rating: 0 };
export default Rating;
