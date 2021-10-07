// implement Rating component here
import React from 'react';

class Rating extends React.Component {
    render() {
        return(
            <div>
                <span>Rating</span>
                <span className='rating'>{this.props.nota}</span>
            </div>
        );
    }
}

export default Rating;
