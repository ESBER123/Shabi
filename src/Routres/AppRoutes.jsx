import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Treatment from "../pages/Treatment";
import Goodtoknow from "../pages/Good to know";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/page/Users";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/team" element={<Team />} />
          <Route path="/good-to-know" element={<Goodtoknow />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="Users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
