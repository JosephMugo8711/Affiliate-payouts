
import './App.css';
import SignupForm from './pages/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<SignupForm />} />
      </Routes>
    </>
  );
}

export default App;
