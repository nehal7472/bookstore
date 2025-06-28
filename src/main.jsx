import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Products from "./pages/admin/Products";
import AdminAbout from "./pages/admin/AdminAbout";
import FrontendLayout from "./layout/FrontendLayout";
import ShopNow from "./pages/ShopNow";
import Home from "./pages/Home";
import About from "./pages/About";
import DeliveryTeam from "./pages/DeliveryTeam";
import Sellers from "./pages/Sellers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="shop-now" element={<ShopNow />} />
          <Route path="about" element={<About />} />
          <Route path="delivery-team" element={<DeliveryTeam />} />
          <Route path="sellers" element={<Sellers />} />
        </Route>
        {/* Admin Routes  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="products" element={<Products />} />
          <Route path="about" element={<AdminAbout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
