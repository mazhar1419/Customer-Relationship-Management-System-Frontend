import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddProduct from "./components/addProduct/AddProduct";
import AddVendor from "./components/addVendor/AddVendor";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LoginComponent from "./components/loginComponent/LoginComponent";
import Overview from "./components/overview/Overview";
import Accounts from "./screens/Accounts";
import Categories from "./screens/Categories";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Products from "./screens/Products";
import Vendors from "./screens/Vendors";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} transition:Slide />
      <Routes>
        <Route exact path="/" element={<Login />}>
          <Route index element={<LoginComponent />} />
          <Route exact path="/forget-password" element={<ForgotPassword />} />
        </Route>
        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route exact path="categories" element={<Categories />} />
          <Route exact path="products" element={<Products />} />
          <Route exact path="add-product" element={<AddProduct />} />
          <Route exact path="all-vendors" element={<Vendors />} />
          <Route exact path="add-vendor" element={<AddVendor />} />
          <Route exact path="accounts" element={<Accounts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
