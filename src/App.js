// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Loginpage from './pages/Loginpage';
import List from './pages/List';
import Details from './pages/Details';

function App() {
  return (
    <Router> {/* ✅ BrowserRouter wrapper */}
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;

