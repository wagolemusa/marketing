
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Korgas from './Components/korgas/Korgas';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/korgas' element={<Korgas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
