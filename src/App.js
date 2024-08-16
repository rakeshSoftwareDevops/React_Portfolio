import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Myskills from './pages/Myskills';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="portfolio_app">
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
