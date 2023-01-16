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
        <Route path='/Flipr' element={<Login />}></Route>
        <Route path='/Flipr/home' element={<Home />}></Route>
        <Route path='/Flipr/signup' element={<Signup />}></Route>
        <Route path='/Flipr/navbar' element={<Navbar />}></Route>
        <Route path='/Flipr/nse' element={<Nse />}></Route>
        <Route path='/Flipr/bse' element={<Bse />}></Route>
        <Route path='/Flipr/reliance' element={<Reliance />}></Route>
        <Route path='/Flipr/ashokley' element={<Ashokley />}></Route>
        <Route path='/Flipr/cipla' element={<Cipla />}></Route>
        <Route path='/Flipr/tatasteel' element={<Tatasteel />}></Route>
        <Route path='/Flipr/eichermot' element={<Eichermot />}></Route>
      </Routes>
      {/* </Router> */}
    </>
  )
}

export default App;
