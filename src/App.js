import { Routes, Route } from 'react-router-dom';
import './App.css';
import Account from './pages/Account';
import Address from './pages/Address';
import Browse from './pages/Browse';
import EditAccount from './pages/EditAccount';
import EditHobby from './pages/EditHobby';
import EditItem from './pages/EditItem';
import Hobby from './pages/Hobby';
import Home from './pages/Home';
import Item from './pages/Item';
import List from './pages/List';
import Lists from './pages/Lists';
import Membership from './pages/Membership';
import Messaging from './pages/Messaging';
import Notification from './pages/Notification';
import Payment from './pages/Payment';
import Purchase from './pages/Purchase';
import NavBar from './components/NavBar';
import NoMatch from './Components/NoMatch';


function App() {
  return (
    <>
    <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/address" element={<Address />} />      
      <Route path="/browse" element={<Browse />} />
      <Route path="/editAccount" element={<EditAccount />} />
      <Route path="/editHobby" element={<EditHobby />} />   
      <Route path="/editItem" element={<EditItem />} />
      <Route path="/hobby" element={<Hobby />} />
      <Route path="/item" element={<Item />} />   
      <Route path="/list" element={<List />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/membership" element={<Membership />} />   
      <Route path="/messaging" element={<Messaging />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/payment" element={<Payment />} /> 
      <Route path="/purchase" element={<Purchase />} /> 
      <Route path="*" element={<NoMatch />} />  
    </Routes>

    </>
  );
}

export default App;