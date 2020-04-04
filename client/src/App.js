import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Articles from './pages/Articles.js';
import About from './pages/About';
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <NavBar />
      </div>
    </Router>
  );
}

export default App;