import React, { useEffect, useState } from "react";
import SalesOverview from "../components/Dashboard/SalesOverview";
import CategoryDistribution from "../components/Dashboard/CategoryDistribution";

const Dashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        const sales = Object.entries(data.rates)
          .slice(0, 10)
          .map(([currency, value]) => ({
            name: currency,
            value: value,
          }));
        setSalesData(sales);
      });

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        const categoryCounts = products.reduce((acc, product) => {
          acc[product.category] = (acc[product.category] || 0) + 1;
          return acc;
        }, {});
        const formattedCategories = Object.entries(categoryCounts).map(
          ([name, value]) => ({
            name,
            value,
          })
        );
        setCategoryData(formattedCategories);
      });
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dashboard Overview</h1>
      </div>

      <div className="widgets-grid">
        <div className="widget">
          <SalesOverview data={salesData} />
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
