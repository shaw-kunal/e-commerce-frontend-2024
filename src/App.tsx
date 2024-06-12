import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import AdminLayout from "./layout/AdminLayout";
import StopWatch from "./pages/admin/apps/StopWatch";
import Coin from "./pages/admin/apps/Coin";
import Coupon from "./pages/admin/apps/Coupon";

const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));

// admin dynamic  import
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Product = lazy(() => import("./pages/admin/Product"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const Customer = lazy(() => import("./pages/admin/Customer"));
const NewProduct = lazy(() => import("./pages/admin/NewProduct"));
const ProductManagement = lazy(() => import("./pages/admin/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/admin/management/TransactionManagement"));
const BarChart = lazy(() => import("./pages/admin/charts/BarChart"));
const PieChart = lazy(() => import("./pages/admin/charts/PieChart"));
const LineChart = lazy(() => import("./pages/admin/charts/LineChart"));

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
            <Route path="product" >
              <Route index element={<Product />} />
              
              <Route path="new" element={<NewProduct />} />
              <Route path=":id" element={<ProductManagement />} />
            </Route>


            <Route path="transaction" >
              <Route index element={<Transaction />} />
              <Route path=":id" element={<TransactionManagement />} />
            </Route>

            <Route path="chart" >
              <Route  path="bar" element={<BarChart/>} />
              <Route  path="pie" element={<PieChart/>} />
              <Route  path="line" element={<LineChart/>} />
            </Route>
            <Route path="app" >
              <Route  path="stopwatch" element={<StopWatch/>} />
              <Route  path="toss" element={<Coin/>} />
              <Route  path="coupon" element={<Coupon/>} />
            </Route>




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
