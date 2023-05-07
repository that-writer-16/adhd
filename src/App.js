import { Routes, Route } from 'react-router-dom';
import './App.css';
import Browse from './pages/Browse';
import EditHobby from './pages/EditHobby';
import Hobby from './pages/Hobby';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Sell from './pages/Sell';
import NavBar from './Components/NavBar';
import NoMatch from './Components/NoMatch';


function App() {
  return (
    <>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/browse" element={<Browse />} />
        <Route path="/hobby/edit" element={<EditHobby />} />   
        <Route path="/hobby" element={<Hobby />} /> 
        <Route path="/membership" element={<Membership />} />   
        <Route path="/sell" element={<Sell />} /> 
        <Route path="*" element={<NoMatch />} />  
      </Routes>
      <p>2023&copy; Kia Harris</p>
    </>
  );
}

export default App;