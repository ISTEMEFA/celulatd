import React from 'react';
import './scss/main.scss'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing/Landing'
import Login from './components/user/Login';
import Register from './components/user/Register';


function App() {
  return (
 
    <Routes>
    <Route exact path="/" element={<Landing/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/Dashboard" element="Dashboard"/>
    <Route path="*" element="Error" />
  </Routes>
  
  );
}

export default App;
