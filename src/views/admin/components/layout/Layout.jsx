// import  { useEffect } from "react";

// import "./layout.css";

// import Sidebar from "../sidebar/Sidebar";
// import TopNav from "../topnav/TopNav";

// import { Routes, Route } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";

// import ThemeAction from "../../redux/actions/ThemeAction";
// import Dashboard from "../../pages/Dashboard";

// const Layout = () => {
//   const themeReducer = useSelector((state) => state.ThemeReducer);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

//     const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

//     dispatch(ThemeAction.setMode(themeClass));

//     dispatch(ThemeAction.setColor(colorClass));
//   }, [dispatch]);

//   return (
//     <Routes>
//       <Route
//         path="/admin/*"
//         render={(props) => (
//           <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
//             <Sidebar {...props} />
//             <div className="layout__content">
//               <TopNav />
//               <div className="layout__content-main">
//               <Route path="/admin/*" element={<Dashboard />} />
//               </div>
//             </div>
//           </div>
//         )}
//       />

//       </Routes>
//   );
// };

// export default Layout;

import { useEffect } from "react";
import "../../assets/css/index.css";
import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../redux/actions/ThemeAction";
import Dashboard from "../../pages/Dashboard";
import Customers from "../../pages/Customers";
// import "../../assets/css/theme.css";

const Layout = (props) => {
  const themeReducer = useSelector((state) => state.ThemeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");
    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");
    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  // const isPathAdmin = window.location.pathname.includes("/admin");

  return (
    <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
      {/* {isPathAdmin && <Sidebar />} */}
      <Sidebar {...props} />
      <div className="layout__content">
        <TopNav />
        <div className="layout__content-main">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route
              path="account-information"
              element={<h1>Account Information</h1>}
            />
            <Route path="users" element={<Customers />} />
            <Route path="roles" element={<h1>Roles</h1>} />
            <Route path="products" element={<h1>Products</h1>} />
            <Route path="product-pricing" element={<h1>Products Pricing</h1>} />
            <Route path="coupons" element={<h1>Coupons</h1>} />
            <Route path="orders" element={<h1>Orders</h1>} />
            <Route path="blogs" element={<h1>Blogs</h1>} />
            <Route path="tickets" element={<h1>Tickets</h1>} />
            <Route path="pages" element={<h1>Pages</h1>} />
            <Route path="testimonials" element={<h1>Testimonials</h1>} />
            <Route path="faqs" element={<h1>FAQs</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
