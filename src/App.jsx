import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLoader from "./views/frontend/components/loaders/MainLoader";
import FrontLayout from "./views/frontend/FrontLayout";
import Layout from "./views/admin/components/layout/Layout";

const App = () => {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<FrontLayout />} />
          <Route path="/admin/*" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
