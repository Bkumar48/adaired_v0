import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontLayout from "./views/frontend/layout/FrontLayout";
import "./App.css";
import { useState } from "react";
import InitLoader from "./views/frontend/components/initLoader/InitLoader";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<FrontLayout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
