import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import Footer from './components/footer'
import Catalog from './components/catalog'
import About from './components/about';
import Home from './components/home'
import Cart from './components/cart';
import Admin from './components/admin';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import GlobalState from './context/globalState';


function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/catalog'element = {<Catalog/>}></Route>
            <Route path='/about' element = {<About/>}></Route>
            <Route path='/cart' element = {<Cart/>}></Route>
            <Route path='/admin' element = {<Admin/>}></Route>
          </Routes>


        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
