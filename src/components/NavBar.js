import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ()=>{
  return (
    <nav>
      <ul className='navBarBtn'>
        <li><Link to='/'>Flex</Link></li>
        <li><Link to='grid1'>Grid1</Link></li>
        <li><Link to='grid2'>Grid2</Link></li>
        <li><Link to='grid3'>Grid3</Link></li>
        
      </ul>
    </nav>
  )
}


export default NavBar;