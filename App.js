import React from 'react'
import Header from "./Header";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "./Home";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Context from "./Context";
import {Info} from "./Array";
const App = () => {
  return (
   
    <BrowserRouter>
    <Header/>
    <>
    <Routes>
    <Route  exact path="/" element={<Home/>}/>
    <Route  path="/cart" element={<Cart/>}/>
    </Routes>

    
    </>
    </BrowserRouter>
   
    
  );
}

export default App