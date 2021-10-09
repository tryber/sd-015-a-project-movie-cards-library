// implement Rating component here
import React from 'react';

export default class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}
