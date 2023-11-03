import { Routes, Route } from "react-router-dom";
import Header from "./global/header/Header";
import Footer from "./global/footer/Footer";
import HomePage from "./pages/HomePage";
import Headroom from "react-headroom";

const FrontLayout = () => {
  return (
    <div>
      <div>
        <Headroom
          style={{
            webkitTransition: "all .5s ease-in-out",
            mozTransition: "all .5s ease-in-out",
            oTransition: "all .5s ease-in-out",
            transition: "all .5s ease-in-out",
            background: "#fff",
            zIndex: "9999",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Header />
        </Headroom>
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
