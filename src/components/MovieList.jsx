// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard.jsx';

class MovieList extends React.Component {
    render() {
        return(
            <div>
                {this.props.movies.map((movie, index) => <MovieCard key={`Movie Title ${1 + index}`} movie={movie} />)}
            </div>
        );
    }
}

export default MovieList;
