import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./containers/Layout'));
const Login = lazy(() => import('./features/user/Login'))
const ForgotPassword = lazy(() => import('./features/user/RegisterPassword'))
const Register = lazy(() => import('./features/user/Register'))

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Register />} />
         <Route path="/login" element={<Login/>}/>
         <Route path="/forgotpassword" element={<ForgotPassword/>}/>

         <Route path="/app/*" element={<Layout />} />

      </Routes>
    </>
  );
}

export default App;
