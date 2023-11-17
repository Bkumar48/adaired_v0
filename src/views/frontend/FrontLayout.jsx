import { Routes, Route } from "react-router-dom";
import Header from "./global/header/Header";
import Footer from "./global/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import Headroom from "react-headroom";
import ContactUs from "./pages/contactPage/ContactUs";

const FrontLayout = () => {
  return (
    <div>
      <div>
        <Headroom
          style={{
            WebkitTransition: "all .5s ease-in-out",
            MozTransition: "all .5s ease-in-out",
            OTransition: "all .5s ease-in-out",
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
          <Route index element={<HomePage />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/blog" element={<h1>Blog</h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/case-studies" element={<h1>Case Studies</h1>} />
          <Route path="/carrer" element={<h1>Carrer</h1>} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default FrontLayout;
