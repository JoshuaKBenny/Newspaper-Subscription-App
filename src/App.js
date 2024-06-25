import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscribers from './components/ViewSubscribers';

function App() {
  return (
    <div >
      <HomePage/>
      <AddSubscribers/>
      <ViewSubscribers/>
    </div>
  );
}

export default App;
