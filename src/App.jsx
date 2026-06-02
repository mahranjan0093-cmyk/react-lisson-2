import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AboutUS from "./pages/AboutUS.jsx";
import ContactUS from "./pages/ContactUS.jsx";
import Products from "./Pages/Products.jsx";
import Signup from "./Pages/Singnup.jsx";
import Signin from "./Pages/Signin.jsx";
import Header from "./Header/Header.jsx";


function App() {
  return (
    <div className="dark-bg h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
