import './App.css';
import { useState } from 'react';
import About from './components/About/About'
import Projects from './components/Projects/Projects';

function App() {
  const [scrollY, setScrollY] = useState(0);

  function getScrollY() {
    setScrollY(window.scrollY)
  }
  window.addEventListener('scroll', getScrollY)

  return (
    <>
    <h1 className="display-1 text-center">Hello,</h1>
    <About scrollY={scrollY}/>
    {/* <Projects scrollY={scrollY}/> */}
    </>
  );
}

export default App;
