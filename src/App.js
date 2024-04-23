import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/About/About';
import './components/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route exact path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;
