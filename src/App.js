import './App.css';
import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
      </main>
    <Footer />
    </Router>
  );
}

export default App;