
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from './pages/Account';
import Address from './pages/Address';
import Browse from './pages/Browse';
import EditAccount from './pages/EditAccount';
import EditHobby from './pages/EditHobby';
import EditItem from './pages/EditItem';
import Hobby from './pages/Hobby';
import Item from './pages/Item';
import List from './pages/List';
import Lists from './pages/Lists';
import Membership from './pages/Membership';
import Messaging from './pages/Messaging';
import Notification from './pages/Notification';
import Payment from './pages/Payment';
import Purchase from './pages/Purchase';

//const { MongoClient } = require('mongodb');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

//Back Button
//<button className="btn" onClick={() => navigate(-1)}>
// Go Back
//</button>

reportWebVitals();
