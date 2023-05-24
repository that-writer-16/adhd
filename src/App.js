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
import EditItem from './Components/EditItem';
import { useEffect } from 'react';
import Purchase from './pages/Purchase';


function App() {
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      //.then((data) => setMessage(data.message));
  }, []);
  return (
    <div className='App'>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/browse" element={<Browse />} />
        <Route path="/hobby/edit" element={<EditHobby />} />   
        <Route path="/item/edit" element={<EditItem />} />
        <Route path="/hobby" element={<Hobby />} /> 
        <Route path="/membership" element={<Membership />} />   
        <Route path="/sell" element={<Sell />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="*" element={<NoMatch />} />  
      </Routes>
      <p className='Center'>2023&copy; Kia Harris</p>
    </div>
  );
}

export default App;