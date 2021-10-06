import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyLine, imagePath, rating } } = this.props;
    return (
      <div>
        <h4>{ title }</h4>
        <img src={ imagePath } alt={ title } />
        <p>{ subtitle }</p>
        <p>{ storyLine }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

export default MovieCard;
