import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontLayout from "./views/frontend/layout/FrontLayout";
import "./App.scss";

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
