import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import { Login } from './pages/Login';
import Reviews from './pages/Reviews';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/reviews" location="/reviews" element={<PrivateRoute/>} >
            <Route path="/reviews" element={<Reviews/>} />
          </Route>
        </Routes>
      </Router>
    );
}

export default App;
