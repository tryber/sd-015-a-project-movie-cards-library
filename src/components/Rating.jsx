import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    console.log(rating);
    return (
      <div>
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.shape({
    rating: PropTypes.number,
  }),
};

Rating.defaultProps = {
  rating: [],
};

export default Rating;

// arrumar o requisito 11 e seguintes.
