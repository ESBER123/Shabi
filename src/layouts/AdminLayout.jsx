import { Outlet } from "react-router-dom";
import Sidebar from "../admin/components/Sidebar";
import "../assets/styles/admin.css";
const AdminLayout = () => {
  return (
    <>
      <main className="content">
        <Sidebar />

        <Outlet />
      </main>
    </>
  );
};
export default AdminLayout;
