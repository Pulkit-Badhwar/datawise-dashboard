import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart2, Users, Settings, Box } from 'lucide-react';

const Sidebar = () => {
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
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;