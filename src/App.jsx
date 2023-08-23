import './App.css';
import About from './components/About/About'
import Projects from './components/Projects/Projects';

function App() {
  window.scrollTo(0,0)
  return (
    <>
    <div id='anchor'>this is never visible, this just keeps the page from starting lower than it should</div>
    <h1 className="display-1 text-center">Hello,</h1>
    <About/>
    <Projects/>
    </>
  );
}

export default App;
