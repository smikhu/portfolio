import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (

    <main>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      <Footer />
      </main>
    
  );
}

export default App;