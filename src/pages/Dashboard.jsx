import React from "react";
import SalesOverview from "../components/Dashboard/SalesOverview";
import CategoryDistribution from "../components/Dashboard/CategoryDistribution";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
];

const categoryData = [
  { name: "Category 1", value: 35 },
  { name: "Category 2", value: 25 },
  { name: "Category 3", value: 20 },
  { name: "Category 4", value: 20 },
];


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dashboard Overview</h1>
      </div>

      <div className="widgets-grid">
        <div className="widget">
          <SalesOverview data={data} />
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
          <CategoryDistribution categoryData={categoryData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
