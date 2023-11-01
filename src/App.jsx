import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/frontend/pages/HomePage";
import Header from "./views/frontend/global/header/Header";
import Footer from "./views/frontend/global/footer/Footer";

// Admin Panel Imports
import SideBar from "./views/adminpanel/components/sidebar/SideBar";
import DashBoard from "./views/adminpanel/pages/DashBoard";
import "./views/adminpanel/assets/css/index.css";
import "./views/adminpanel/assets/css/index.css";
import TopNav from "./views/adminpanel/components/topnav/TopNav";

const App = (props) => {
  useEffect(() => {
    document.title =
      window.location.pathname === "/admin"
        ? "Dashboard | Adaired"
        : "Home | Adaired";
  }, []);

  return (
    <>
      <Router>
        <div className="layout">
          {!window.location.pathname.startsWith("/admin") && <Header />}
          {window.location.pathname.startsWith("/admin") && (
            <SideBar {...props} />
          )}
          {window.location.pathname.startsWith("/admin") && <TopNav />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/admin" element={<DashBoard />}>
              <Route index element={<DashBoard />} />
              <Route path="dashboard" element={<DashBoard />} />
            </Route>
          </Routes>
          {!window.location.pathname.startsWith("/admin") && <Footer />}
        </div>
      </Router>
    </>
  );
};

export default App;
