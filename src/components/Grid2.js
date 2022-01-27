import React from 'react';
import lobo1 from '../img/lobo1.jpg';
import lobo2 from '../img/lobo2.jpg';
import lobo3 from '../img/lobo3.jpg';
import lobo4 from '../img/lobo4.jpg';



const Grid2 = ()=>{

  return (
    <>
    <h1>Section Grid 2</h1> 
    <section className='grid2 animeTop'>
      <div className='video'>
        <img src={lobo1} />
        <p>Como criar sites</p>
      </div>
      <div className='sidebar'>
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
          <img src={lobo2} />
          <p>Legenda</p>
        </div>
      </div>
    </section>
    </>
  )

}


export default Grid2;