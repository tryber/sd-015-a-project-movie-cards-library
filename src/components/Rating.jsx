import React from 'react';
import movies from '../data';

class Rating extends React.Component {
  render() {
    const { rating } = movies;
    return (
      <div className="rating" rating={ rating }>
        <p>{rating}</p>
      </div>
    );
  }
}
export default Rating;
