import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/scrollbar.css';
import Header from './components/Header';
import Loader from './components/Loader';
import Home from './pages/Home';
import Myskills from './pages/Myskills';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { Helmet } from 'react-helmet';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay for demonstration

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  if (loading) {
    return <Loader />; 
  }
  
  return (
    <div className="portfolio_app scrollable-element">
        <Header/>
        <Home/>
        <Myskills/>
        <Experience/>
        <Project/>
        <Contact/>
    </div>
  );
}

export default App;
