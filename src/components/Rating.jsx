import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating">
        <p>{ rating }</p>
      </div>
    );
  }
}

export default Rating;
