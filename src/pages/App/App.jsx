import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';

function App() {
  return (
    <main>
    <Routes>
      <Route path='/' element={<Landing />} />
    </Routes>
    </main>
  );
}

export default App;
