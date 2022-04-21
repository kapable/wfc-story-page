import './App.css';
import './Minting.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainStory from './pages/MainStory';
import Minting from './pages/Minting';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainStory />} />
        <Route path='/minting' element={<Minting />} />
      </Routes>
    </Router>
  );
};

export default App;
