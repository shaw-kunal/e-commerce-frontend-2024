import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import AdminLayout from "./layout/AdminLayout";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

// admin dynamic  import
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Product = lazy(() => import("./pages/admin/Product"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const Customer = lazy(() => import("./pages/admin/Customer"));
const NewProduct = lazy(() => import("./pages/admin/NewProduct"));
const ProductManagement = lazy(() => import("./pages/admin/ProductManagement"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="product/new" element={<NewProduct />} />
            <Route path="product/:id" element={<ProductManagement />} />
            <Route path="transaction" element={<Transaction />} />
            <Route path="customer" element={<Customer />} />
          </Route>

          {/* charts */}

          {/* managment */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
