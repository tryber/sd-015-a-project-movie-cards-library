// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
	const { rating } = this.props;

    return <div>
		<div className="rating">
		<p>{ rating }</p>
	</div>;
	</div>
  }
}

export default Rating;
