import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Landing} from '../Pages';
import Details from '../Pages/Details';
import Filter from '../Pages/Filter';
import Favorite from '../Pages/Favorite';
import About from '../Pages/About';
import Error from '../Pages/Error';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/filter" element={<Filter/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  </Router>

  );
}

export default App;
