import React from 'react';

// crio o meu component Header, via classe, nele vai ter o render(como sempre) e vai retornar uma tag
// header pai com um h1 filho, sendo esse h1 com o seguint valor: 'Movie Cards Library'(string), 
// eu exporto o Header, eu o importo no meu app.js para que possa ser renderizado na minha aplicação.
class Header extends React.Component {
  render() {
    return (
      <header className='movie-card-header'>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}
export default Header;
