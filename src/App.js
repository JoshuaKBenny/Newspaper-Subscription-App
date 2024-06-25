import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscribers from './components/ViewSubscribers';
import SearchSubscriber from './components/SearchSubscriber';

function App() {
  return (
    <div >
      <HomePage/>
      <AddSubscribers/>
      <ViewSubscribers/>
      <SearchSubscriber/>
    </div>
  );
}

export default App;
