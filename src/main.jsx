import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import AdminLayout from "./layout/AdminLayout";
import Products from "./pages/admin/Products";
import FrontendLayout from "./layout/FrontendLayout";
import ShopNow from "./pages/ShopNow";
import Home from "./pages/Home";
import About from "./pages/About";
import DeliveryTeam from "./pages/DeliveryTeam";
import Sellers from "./pages/Sellers";
import Customers from "./pages/admin/Customers";
import Reports from "./pages/admin/Reports";
import Geography from "./pages/admin/Geography";
import Conversations from "./pages/admin/Conversations";
import Export from "./pages/admin/Export";
import Admin from "./pages/admin/Admin";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            {/* Frontend Routes */}
            <Route path="/" element={<FrontendLayout />}>
              <Route index element={<Home />} />
              <Route path="shop-now" element={<ShopNow />} />
              <Route path="about" element={<About />} />
              <Route path="delivery-team" element={<DeliveryTeam />} />
              <Route path="sellers" element={<Sellers />} />
            </Route>
            {/* Admin Routes  */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Admin />} />
              <Route path="products" element={<Products />} />
              <Route path="customers" element={<Customers />} />
              <Route path="reports" element={<Reports />} />
              <Route path="geography" element={<Geography />} />
              <Route path="conversations" element={<Conversations />} />
              <Route path="export" element={<Export />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
