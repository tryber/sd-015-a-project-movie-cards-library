import React from 'react';
import movies from '../data';

class Rating extends React.Component {
  render() {
    return (
      movies.map((rate, index) => (<p key={ index }>{ rate.rating }</p>))
    );
  }
}

export default Rating;
