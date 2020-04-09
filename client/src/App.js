import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/index.js';
import Projects from './pages/Projects/index.js';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;