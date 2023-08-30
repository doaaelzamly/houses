import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Landing} from '../Pages';
import Details from '../Pages/Details';
import Filter from '../Pages/Filter';
import About from '../Pages/About';
import Error from '../Pages/Error';
import Profile from '../Pages/Profile';
import { AuthProvider } from '../Pages/Context';
import PrivateRoute from '../Components/Route/private';

function App() {
 

  return (
    <Router>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path='/' element= {<PrivateRoute/>}>
              <Route path="/profile" element={<Profile/>} />
        </Route>
        <Route path="/filter" element={<Filter/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </AuthProvider>
</Router>

  );
}

export default App;
