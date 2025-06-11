import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesDetails from "./pages/ServicesDetails";
import BackTop from "./components/BackTop";
import ScrollToTop from "./components/ScrollToTop";
import ProductsDetails from "./pages/ProductsDetails";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rreth-nesh" element={<About />} />
        <Route path="/sherbimet" element={<Services />} />
        <Route path="/produktet" element={<Products />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/sherbimet/:slug" element={<ServicesDetails />} />
        <Route path="/produktet/:brand" element={<ProductsDetails />} />
      </Routes>
      <Footer />
      <BackTop />
    </Router>
  );
}