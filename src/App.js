import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Category from './pages/category';
import Home from './pages/home';
import List from './pages/list';
// import Main from './components/mainpage';
// import P from './components/home/stopwatch';
// import Profile from './components/home/homeprofile';

function App() {
  // const navigate = useNavigate();

  // // This useEffect will navigate to the '/Home' route when the app loads.
  // React.useEffect(() => {
  //   navigate('/Register');
  // }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/" element={<Home/>} />
        <Route path="/Movies" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
