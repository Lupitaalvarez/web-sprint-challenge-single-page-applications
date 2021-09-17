import React from "react";
import Pizza from './pizza'
import Home from './home'
import { Route, Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (

    <div>
     <nav className="navbar">
     <Link to="/">
       <button name = 'homebutton'>Home</button>
     </Link>
     <br/>
     <Link to="/pizza"> 
       <button name = 'orderbutton'>Place Your Order</button>
     </Link>
     </nav>

     <Route exact path="/" component={Home} />
     <Route path="/pizza" component={Pizza} />

     </div>
       );
     };
     export default App;
