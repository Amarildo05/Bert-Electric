import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rreth-nesh" element={<About />} />
        <Route path="/sherbimet" element={<Services />} />
        <Route path="/produkte" element={<Products />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
}