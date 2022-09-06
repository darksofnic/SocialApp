import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Signup from "./Screens/SignUp/SignUp";
import Dashboard from "./Screens/Dashboard/Dashboard";
import Nav from "./Components/Nav/Nav"
import Testing from "./Screens/Testing/Testing";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/Testing" element={<Testing></Testing>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
