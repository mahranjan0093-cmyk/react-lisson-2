import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AboutUS from "./pages/AboutUS.jsx";
import ContactUS from "./pages/ContactUS.jsx";
import Products from "./Pages/Products.jsx";
import Signup from "./Pages/Singnup.jsx";
import Signin from "./Pages/Signin.jsx";
import Header from "./Header/Header.jsx";
import { useState } from "react";


function App() {
  const [bgColor, setBgColor] = useState("bg-gray-700");

  return (
    <div className="dark-bg h-screen">
      <Header bgColor={bgColor} setBgColor={setBgColor} />
      <Routes>
        <Route path="/" element={<Home bgColor={bgColor} setBgColor={setBgColor}/>} />
        <Route path="/about" element={<AboutUS bgColor={bgColor} setBgColor={setBgColor}/>} />
        <Route path="/contact" element={<ContactUS bgColor={bgColor} setBgColor={setBgColor}/>} />
        <Route path="/products" element={<Products bgColor={bgColor} setBgColor={setBgColor}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
