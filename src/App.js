// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Careers from './Pages/Careers';
import Feeds from './Pages/Feeds';
import Login from './Pages/Login';
import RequireAuth from './Components/hoc/RequiredAuth';

function App() {
  return (
    <div className='App' >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="/Careers" element={
        <RequireAuth>
        <Careers />
        </RequireAuth>
      } />


        <Route path="/Feeds" element={
        <RequireAuth>
        <Feeds />
        </RequireAuth>
      } />


        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
