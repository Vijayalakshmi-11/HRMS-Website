import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Mainlayout";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Payroll from "../pages/Payroll";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="employees" element={<Employees />} />
        <Route path="payroll" element={<Payroll />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
