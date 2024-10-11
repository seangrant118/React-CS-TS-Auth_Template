import React from 'react';
import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
