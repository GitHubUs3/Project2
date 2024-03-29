import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Container, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Home } from './components/StoreInventory/home';
import { Items } from './components/StoreInventory/items';

function App() {
  return (
    <BrowserRouter>
    <NavBar/> 

    <section className='nav-section'>
      <div className='nav-item'>
        <Link className='nav-item' to="/">Home</Link>
      </div>
      <div className='nav-item'>
        <Link className='nav-item' to="/table">Items</Link>
      </div>
    </section>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/table" element={<Items/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
