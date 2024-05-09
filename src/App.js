// import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import React from 'react';
import Landing from './Components/Landing';
import Fdashboard from './Components/fdashboard';
import Home from './Pcomponents/Pcomponent'
import Modal from './Pcomponents/modal'
import Signup  from './Pcomponents/Sign-up';
import Login from './Pcomponents/login';
export default function App(){
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' Component={Landing}></Route>
        <Route path='/dash' Component={Fdashboard}></Route>
        <Route path='/home' Component={Home}></Route>
        <Route path='/modal' Component={Modal}></Route>
        <Route path='/signup' Component={Signup}></Route>
        <Route path='/login' Component={Login}></Route>
    </Routes>
    </BrowserRouter>
  )
}

