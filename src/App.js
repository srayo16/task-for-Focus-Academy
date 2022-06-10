import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Welcomepage from './Components/Welcomepage/Welcomepage';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Welcomepage></Welcomepage>} />
        <Route path="/welcome" element={<Welcomepage></Welcomepage>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
