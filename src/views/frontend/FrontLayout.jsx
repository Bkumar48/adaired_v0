import { Routes, Route } from "react-router-dom";
import Header from "./global/header/Header";
import Footer from "./global/footer/Footer";
import HomePage from "./pages/HomePage";

const FrontLayout = () => {
  return (
    <div>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/blog" element={<h1>Blog</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/case-studies" element={<h1>Case Studies</h1>} />
          <Route path="/carrer" element={<h1>Carrer</h1>} />
          <Route path="/contact-us" element={<h1>Contact Us</h1>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default FrontLayout;
