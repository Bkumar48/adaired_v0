import Header from "./views/frontend/global/header/Header";
import Footer from "./views/frontend/global/footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/frontend/pages/HomePage";
import AboutPage from "./views/frontend/pages/AboutPage";
import ContactPage from "./views/frontend/pages/ContactPage";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
        <Footer />
      </Router>  
    </>
  )
}

export default App
