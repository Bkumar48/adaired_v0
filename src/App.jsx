import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontLayout from "./views/frontend/layout/FrontLayout";
import "./App.css";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="*" element={<FrontLayout />} />
            {/* <Route path="/admin/*" element={<Layout />} /> */}
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
};

export default App;
