import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="admin">
      <aside className="sidebar">
        <h2>Admin</h2>

        <Link to="/admin">Dashboard</Link>
        <Link to="users">Users</Link>
      </aside>

      <main className="content"></main>
    </div>
  );
};
export default Sidebar;
