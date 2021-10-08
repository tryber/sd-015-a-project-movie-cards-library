import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating" rating={ rating }>
        <p>{rating}</p>
      </div>
    );
  }
}

Rating.defaultProps = {
  rating: '',
};

Rating.propTypes = {
  rating: propTypes.string,
};

export default Rating;
