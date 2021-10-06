import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    console.log(rating);
    return (
      <div>
        <p className="rating">{rating}</p>
      </div>
    );
  }
}
 
export default Rating;
