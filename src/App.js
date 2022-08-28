
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
