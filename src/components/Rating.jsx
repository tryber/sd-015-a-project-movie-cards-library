import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <div className="movie-card-rating">
        <h1 className="rating">{ this.props.rating }</h1>
      </div>
    );
  }
}

export default Rating;
