import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Projects from '../Projects/Projects';

function App() {
  return (
    <main>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    </main>
  );
}

export default App;
