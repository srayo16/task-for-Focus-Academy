import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Welcomepage from './Components/Welcomepage/Welcomepage';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import RequireAuth from './Components/RequireAuth';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Welcomepage></Welcomepage>} />
        <Route path="/welcome" element={<Welcomepage></Welcomepage>} />
        <Route path="/home" element={<RequireAuth>
          <Home></Home>
        </RequireAuth>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
