import { NavLink } from "react-router-dom";
import { LayoutDashboard, BarChart2, Users, Settings, Box } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <Box size={32} />
        <span>Enterprise</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/">
              <LayoutDashboard />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reports">
              <BarChart2 />
              <span>Reports</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users">
              <Users />
              <span>Users</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings">
              <Settings />
              <span>Settings</span>
            </NavLink>
          </li>
          <li onClick={handleLogout} className="nav-item">
            <NavLink to="/login">
              <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
