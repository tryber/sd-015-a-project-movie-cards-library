import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating" rating={ rating }>
        <p>{ rating }</p>
      </div>
    );
  }
}
Rating.propTypes = { rating: PropTypes.number };
Rating.defaultProps = { rating: 0 };
export default Rating;
