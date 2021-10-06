import React from 'react';

class Header extends React.Component { // Componente responsável pelo cabeçalho da página. Será chamado dentro do Componente React de classe 'App'.
  render() {
    return (
      <header>
        <h1>Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
