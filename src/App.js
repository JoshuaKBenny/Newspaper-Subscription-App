import logo from './logo.svg';
import './App.css';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscribers from './components/ViewSubscribers';
import SearchSubscriber from './components/SearchSubscriber';
import DeleteSubscribers from './components/DeleteSubscribers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<AddSubscribers/>}/>
  <Route path="/ViewSubscriber" element={<ViewSubscribers/>}/>
  <Route path="/SearchSubscriber" element={<SearchSubscriber/>}/>
  <Route path="/DeleteSubscriber" element={<DeleteSubscribers/>}/>
  
</Routes>
</BrowserRouter>
  );
}

export default App;
