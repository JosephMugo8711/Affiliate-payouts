
import './App.css';
import SignupForm from './pages/signup';
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
