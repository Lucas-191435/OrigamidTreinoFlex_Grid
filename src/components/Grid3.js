import React from 'react';
import lobo1 from '../img/lobo1.jpg';
import lobo2 from '../img/lobo2.jpg';
import lobo3 from '../img/lobo3.jpg';
import lobo4 from '../img/lobo4.jpg';


const Grid3 = ()=>{


  return (
    <>
    <h1>Section Grid 3</h1> 
    <section className='grid3 animeTop'>
      <div className='grid3-item'>
        <img src={lobo4} />
        <p>Legenda</p>
      </div>
      <div className='grid3-item'>
        <img src={lobo2} />
        <p>Legenda</p>
      </div>
      <div className='grid3-item'>
        <img src={lobo3} />
        <p>Legenda</p>
      </div>
    </section>
    </>
  )
}


export default Grid3;