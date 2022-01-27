import styles from './styles.css';
import React from 'react';

import './styles.css';

import Grid1 from './components/Grid1';
import Grid2 from './components/Grid2';
import Grid3 from './components/Grid3';
import Header from './Header';
import Flex from './components/Flex';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <Routes >
        <Route path='/' element={<Flex />} />
        <Route path='grid1' element={<Grid1 />} />
        <Route path='grid2' element={<Grid2 />} />
        <Route path='grid3' element={<Grid3 />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
