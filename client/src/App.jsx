import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Signup from "./Signup"
import Login  from "./login";
import Home from './Home'
const App =()=> {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>   
    </BrowserRouter>
  )
}

export default App
