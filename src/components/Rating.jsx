import React from 'react';
import PropType from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">{ rating }</div>
    );
  }
}
Rating.propTypes = {
  rating: PropType.number,
};
Rating.defaultProps = {
  rating: 0,
};

export default Rating;
