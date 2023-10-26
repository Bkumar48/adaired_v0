import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/frontend/pages/HomePage";
import "./App.css";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>  
    </>
  )
}

export default App
