import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <div className="rating" rating={ this.props.rating }>
        <p>{this.props.rating}</p>
      </div>
    );
  }
}

export default Rating;
