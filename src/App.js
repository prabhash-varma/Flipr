import React from "react";
import Login from "./Components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Nse from "./Components/Nse";
import Bse from "./Components/Bse";
import Reliance from "./Components/Reliance";
import Ashokley from "./Components/Ashokley";
import Cipla from "./Components/Cipla";
import Tatasteel from "./Components/Tatasteel";
import Eichermot from "./Components/Eichermot";
import Home from "./Components/Home";



function App() {

  return (
    <>
      {/* <Router> */}
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/navbar' element={<Navbar />}></Route>
        <Route path='/nse' element={<Nse />}></Route>
        <Route path='/bse' element={<Bse />}></Route>
        <Route path='/reliance' element={<Reliance />}></Route>
        <Route path='/ashokley' element={<Ashokley />}></Route>
        <Route path='/cipla' element={<Cipla />}></Route>
        <Route path='/tatasteel' element={<Tatasteel />}></Route>
        <Route path='/eichermot' element={<Eichermot />}></Route>
      </Routes>
      {/* </Router> */}
    </>
  )
}

export default App;
