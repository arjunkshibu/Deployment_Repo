import React, { Suspense, lazy } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const WebLayout = lazy(() => import("./layouts/WebLayout"));
const Contact = lazy(() => import("./pages/Shared/Contact"));
const About = lazy(() => import("./pages/Shared/About"));
const Home = lazy(() => import("./pages/Shared/Home"));
const Courses = lazy(() => import("./pages/Shared/Courses"));

const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const UsersTable = lazy(() => import("./pages/Admin/AdminUsers"));
const AdminPayments = lazy(() => import("./pages/Admin/AdminPayments"));
const AdminProfile = lazy(() => import("./pages/Admin/AdminProfile"));
const UserLayout = lazy(() => import("./layouts/UserLayout"));
const UserLanding = lazy(() => import("./pages/User/UserLanding"));
const UserDashboard = lazy(() => import("./pages/User/UserDashboard"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));

import Loader from "./components/Loader";
import Error404 from "./pages/Shared/Error404";
import UserFavourites from "./pages/User/UserFavourites";
import UserProfile from "./pages/User/UserProfile";
import Terms from "./pages/User/Terms";
import Policy from "./pages/User/Policy";
import Help from "./pages/User/Help";
import UserPayments from "./pages/User/UserPayments";
import UserSubscriptions from "./pages/User/UserSubscriptions";
import Payment from "./services/Payment";
import AdminCourses from "./pages/Admin/AdminCourses";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<WebLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<Error404 />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="/courses" element={<Courses />} />

            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<UsersTable />} />
              <Route path="/admin/payments" element={<AdminPayments />} />
              <Route path="/admin/profile" element={<AdminProfile />} />
              <Route path="/admin/courses" element={<AdminCourses />} />
            </Route>
            <Route element={<UserLayout />}>
              <Route path="/user/dashboard" element={<UserDashboard />} />
              <Route path="/user/favourites" element={<UserFavourites />} />
              <Route path="/user/profile" element={<UserProfile />} />
              <Route path="/user/payments" element={<UserPayments />} />
              <Route path="/user/subscriptions" element={<UserSubscriptions />} />

            </Route>
            <Route path="/user/landing" element={<UserLanding />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
