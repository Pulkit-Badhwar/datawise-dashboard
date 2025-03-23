// import { BarChart, PieChat, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dashboard Overview</h1>
      </div>
      
      <div className="widgets-grid">
        <div className="widget">
        </div>
        
        <div className="widget">
          <h3>Recent Activity</h3>
          <div className="activity-feed">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="activity-item">
                <p>User activity {item}</p>
                <small>2 hours ago</small>
              </div>
            ))}
          </div>
        </div>
        
        <div className="widget">
          <h3>Quick Stats</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <p className="stat-value">1,234</p>
              <p className="stat-label">Total Users</p>
            </div>
            <div className="stat-item">
              <p className="stat-value">$45,678</p>
              <p className="stat-label">Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;