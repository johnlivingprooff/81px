import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
