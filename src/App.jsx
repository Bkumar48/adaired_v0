
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontLayout from "./views/frontend/FrontLayout";
import Layout from './views/admin/components/layout/Layout';

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
