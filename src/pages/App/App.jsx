import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Projects from '../Projects/Projects';
import ProjectDetail from '../ProjectDetail/ProjectDetail';

function App() {
  return (
    <main>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:id' element={<ProjectDetail />}/>
    </Routes>
    </main>
  );
}

export default App;
