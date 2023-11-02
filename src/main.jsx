import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

{
  window.location.pathname.startsWith("/admin")
    ? (document.title = "Admin Dashboard | Adaired_v0")
    : (document.title = "Adaired_v0");
}

// Redux store
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./views/admin/redux/reducers";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
