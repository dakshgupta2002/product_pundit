import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import WriteReview from './pages/WriteReview';
import Product from './pages/Product';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          {/* search bar to query products */}
          <Route path="/" element={<Reviews/>} />

          {/* page to view detailed description of a product */}
          <Route path="/product/:id" element={<Product/>} />

          {/* write a review for a product */}
          <Route path="/review/:id" location="/review/:id" element={<PrivateRoute/>} >
            <Route path="/review/:id" element={<WriteReview/>} />
          </Route>

        </Routes>
      </Router>
    );
}

export default App;
