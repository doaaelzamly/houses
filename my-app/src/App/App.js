import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import {Landing} from '../Pages';
import Details from '../Pages/Details';
import Filter from '../Pages/Filter';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<Filter />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
