
import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import initializeApp from './app/init';


const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

initializeApp()

const token = checkAuth()


function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <>
      <Router>
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
