// implement MovieCard component here
import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <div>
          {this.props.movie.map((e, index) => (
            <div>
              <p>{e.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieCard;
