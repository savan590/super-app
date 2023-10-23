import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Category from './pages/category';
import Home from './pages/home';
import List from './pages/list';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Movies" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
