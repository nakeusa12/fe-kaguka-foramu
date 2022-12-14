import { Navigate, Route, Routes } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
import GuestOnlyRoute from "../components/GuestOnlyRoute";

import { Login } from "../pages/Login";
// import { HomeRoute } from "./HomeRoute";
import { TalentsRoute } from './TalentsRoute';
import { CategoriesRoute } from "./CategoriesRoute";
import { PaymentsRoute } from './PaymentsRoute';
import ComponentNavbar from "../components/Navbar";
import { EventsRoute } from './EventsRoute';
import { OrdersRoute } from './OrdersRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <GuestOnlyRoute>
            <Login />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <ComponentNavbar />
            <GuardRoute />
          </>
        }
      >
        {/* <Route path="dashboard/*" element={<HomeRoute />} /> */}
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path='talents/*' element={<TalentsRoute />} />
        <Route path='payments/*' element={<PaymentsRoute />} />
        <Route path='events/*' element={<EventsRoute />} />
        <Route path='orders/*' element={<OrdersRoute />} />
        <Route path="" element={<Navigate to="/categories" replace={true} />} />
      </Route>
    </Routes>
  );
}
