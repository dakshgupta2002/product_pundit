import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import WriteReview from './pages/WriteReview';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/" element={<Reviews/>} />
          <Route path="/review" location="/review" element={<PrivateRoute/>} >
            <Route path="/review" element={<WriteReview/>} />
          </Route>
        </Routes>
      </Router>
    );
}

export default App;
