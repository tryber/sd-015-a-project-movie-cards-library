// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

// title: 'Kingsglaive',
// subtitle: 'Final Fantasy XV',
// storyline: 'King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire\'s plans to steal the sacred crystal.',
// rating: 4.5,
// imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',

class MovieCard extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.movie.imagePath} alt='qualquerCoisa' />
                <div>
                    <h4>{this.props.movie.title}</h4>
                    <h5>{this.props.movie.subtitle}</h5>
                    <p>{this.props.movie.storyline}</p>
                </div>
                <Rating rating={this.props.movie.rating} />
            </div>
        );
    }
}

export default MovieCard;
