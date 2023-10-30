import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/frontend/pages/HomePage";
import Header from "./views/frontend/global/header/Header";
import Footer from "./views/frontend/global/footer/Footer";
import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
