import './App.css';
import './pages/Browse';
import './pages/Sell';
import './pages/Notification';
import './pages/Account';
import './pages/Messaging';

function App() {
  return (
    <div className="App">
        <a href='./components/Browse'>Notification</a>
        <a href='App.js'>Messaging</a>
        <a href='./components/Sell'>Account</a>
      <header className="App-header">
        <a href='./components/Browse'>Browse</a>
        <a href='App.js'>Home</a>
        <a href='./components/Sell'>Sell</a>
      </header>
    </div>
  );
}

export default App;