import React from 'react';

const Header = ()=>{

  return (
    <header className='header'>
      <a href='/'>Logo</a>
      <nav>
        <ul className='menu'>
          <li><a href='/'>Sobre</a></li>
          <li><a href='/'>Contato</a></li>
          <li><a href='/'>Produtos</a></li>
        </ul>
      </nav>
    </header>
  )
 
};


export default Header;
