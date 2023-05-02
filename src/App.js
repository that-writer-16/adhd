import { Routes, Route } from 'react-router-dom';
import './App.css';
import Account from './pages/Account';
import Browse from './pages/Browse';
import EditAccount from './pages/EditAccount';
import EditHobby from './pages/EditHobby';
import EditItem from './pages/EditItem';
import Hobby from './pages/Hobby';
import Home from './pages/Home';
import Item from './pages/Item';
import Membership from './pages/Membership';
import Sell from './pages/Sell';
import NavBar from './Components/NavBar';
import MiniNavBar from './Components/MiniNavBar';
import NoMatch from './Components/NoMatch';


function App() {
  return (
    <>
      <MiniNavBar />
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />   
        <Route path="/browse" element={<Browse />} />
        <Route path="/account/edit" element={<EditAccount />} />
        <Route path="/hobby/edit" element={<EditHobby />} />   
        <Route path="/item/edit" element={<EditItem />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/item" element={<Item />} />   
        <Route path="/membership" element={<Membership />} />   
        <Route path="/sell" element={<Sell />} /> 
        <Route path="*" element={<NoMatch />} />  
      </Routes>
    </>
  );
}

export default App;