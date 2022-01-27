import React from 'react';
import lobo1 from '../img/lobo1.jpg';
import lobo2 from '../img/lobo2.jpg';
import lobo3 from '../img/lobo3.jpg';
import lobo4 from '../img/lobo4.jpg';

const Grid1 = ()=>{

  return (
    <>
    <h1>Section Grid 1</h1> 
    <section className='grid1 animeLeft'>
      <div>
        <img src={lobo1} />
        <p>Legenda</p>
      </div>
      <div>
        <img src={lobo2} />
        <p>Legenda</p>
      </div>
      <div>
        <img src={lobo3} />
        <p>Legenda</p>
      </div>
      <div>
        <img src={lobo2} />
        <p>Legenda</p>
      </div>
      <div>
        <img src={lobo1} />
        <p>Legenda</p>
      </div>
      <div>
        <img src={lobo2} />
        <p>Legenda</p>
      </div>
      <div>
        <img src={lobo2} />
        <p>Legenda</p>
      </div>
      <div>
        <img src={lobo2} />
        <p>Legenda</p>
      </div>
      <div>
        <img src={lobo2} />
        <p>Legenda</p>
      </div>
      <div className='anuncio'>
        <img src={lobo2} />
        <p>Anucio</p>
      </div>
    </section>
    </>
  )
  
}


export default Grid1;