import './App.css';
import About from './components/About/About'
import Projects from './components/Projects/Projects';

function App() {
  window.scrollTo(0,0)
  return (
    <>
    <div id='anchor'>a</div>
    <h1 className="display-1 text-center">Hello,</h1>
    <About/>
    <Projects/>
    </>
  );
}

export default App;
