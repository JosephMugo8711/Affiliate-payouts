import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import initializeApp from './app/init';



const Layout = lazy(() => import('./containers/Layout'));
const Login = lazy(() => import('./features/user/Login'))
const ForgotPassword = lazy(() => import('./features/user/RegisterPassword'))
const Register = lazy(() => import('./features/user/Register'))


// Initialize diff libraries
initializeApp()


// Check for login and initialize axios
const token = checkAuth()


function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>

 
          <Route path="/dashboard/*" element={<Layout />} />

          <Route path="*" element={<Navigate to={token ? "/dashboard/default" : "/login"} replace />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
