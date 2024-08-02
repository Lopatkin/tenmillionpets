// import logo from './logo.svg';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"
import AppRouter from "./components/AppRouter";
import './App.css';
import { Context } from './index';
import { useContext } from 'react';

const App = () => {

  const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};
export default App;