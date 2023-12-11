import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Category from './pages/Category';
import Expense from './pages/Expense';

class App extends Component {
  state = {  }
  render() { 
      return ( 
          <Router>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Category />} />
              <Route path="/expenses" element={<Expense />} />
              </Routes>
           </Router>
      );
  }
}

export default App;
