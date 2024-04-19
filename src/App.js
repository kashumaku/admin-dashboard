import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/ProductList";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./App.css";
import Setting from "./pages/Setting";
import OrderList from "./pages/OrderList";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <div className="h-screen overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
          <Route path="admin/register" element={<Register />} />

          <Route path="/admin/dashboard" element={<Home />}>
            <Route path="" element={<Dashboard />} />
            <Route path="/admin/dashboard/products" element={<ProductList />} />
            <Route
              path="/admin/dashboard/new-product"
              element={<NewProduct />}
            />
            <Route path="/admin/dashboard/orders" element={<OrderList />} />
            <Route path="/admin/dashboard/customers" element={<Customers />} />
            <Route path="/admin/dashboard/register" element={<Register />} />
            <Route path="/admin/dashboard/settings" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
