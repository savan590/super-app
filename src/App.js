
// import './App.css';
import Register from './components/register';
import Category from "./components/category";
import { Routes, Route } from 'react-router-dom';
import React from 'react'


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/Register' element={<Register />} />
          <Route path='/Category' element={<Category />} />
        </Routes>
        {/* <Register/> */}
    </div>
  );
}

export default App;
