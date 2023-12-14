
import './App.css';
import Register from './features/user/Register';
import Login from './features/user/Login';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from './features/user/RegisterPassword';

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Register />} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </>
  );
}

export default App;
