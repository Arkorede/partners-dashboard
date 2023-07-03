import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./components/shared/Layout";
import PrivateRoutes from "./util/PrivateRoutes";
import Dashboard from "./pages/dashboard/Dashboard";
import Wallet from "./pages/dashboard/Wallet/Wallet";
import LoanProducts from "./pages/dashboard/LoanProducts";
import Product from "./pages/dashboard/Product";
import LoanRequest from "./pages/dashboard/LoanRequest";
import RequestDetails from "./pages/dashboard/RequestDetails";
import LoanHistory from "./pages/dashboard/LoanHistory";
import Integrations from "./pages/dashboard/Integrations";
import Settings from "./pages/dashboard/Settings";

function App() {
  return (
    // <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      {/* <Route element={<PrivateRoutes />}> */}
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="loanproducts" element={<LoanProducts />} />
        <Route path="loanproducts/product" element={<Product />} />
        <Route path="loanrequest" element={<LoanRequest />} />
        <Route path="loanrequest/:id" element={<RequestDetails />} />
        <Route path="loanhistory" element={<LoanHistory />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      {/* </Route> */}
    </Routes>
    // </Router>
  );
}
export default App;
