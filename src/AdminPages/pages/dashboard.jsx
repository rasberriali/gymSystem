import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import React from 'react';
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Client from './clients-chart';
import './dashboard.css';
import Revenue from './revenue-chart';

const Dashboard = () => {
  const data = [
    { name: 'Female', value: 100, color: '#FF8C00' }, // Orange color
    { name: 'Male', value: 150, color: '#000000' }    // Black color
  ];

  const planData = [
    { name: 'Plan A', members: 30 },
    { name: 'Plan B', members: 70 },
    { name: 'Plan C', members: 50 },
    { name: 'Plan D', members: 100 },
  ];

  return (
    <div className='dashboard'>
    <div className='sidebar'>
      <div className='logo-container'>
        <img id="gym-logo" src={require('../Assets/samplelogo.png')} alt="logo" />
      </div>
      <ul className="menu">
        <li>
          <a href="/" className="nav-link">
            <i className="fas fa-tachometer-alt"></i>
            <span>DASHBOARD</span>
          </a>
        </li>
        <li>
          <a href="/Membership" className="nav-link">
            <i className="fas fa-users"></i>
            <span>MEMBERSHIP</span>
          </a>
        </li>
        <li>
          <a href="/Revenue" className="nav-link">
            <i className="fas fa-dollar-sign"></i>
            <span>REVENUE</span>
          </a>
        </li>
        <li>
          <a href="/Bookings" className="nav-link">
            <i className="fas fa-calendar-check"></i>
            <span>BOOKINGS</span>
          </a>
        </li>
        <li>
          <a href="/Forecasting" className="nav-link">
            <i className="fas fa-chart-line"></i>
            <span>FORECASTING</span>
          </a>
        </li>
        <li>
          <a href="/Coaches" className="nav-link">
            <i className="fas fa-user-tie"></i>
            <span>COACHES</span>
          </a>
        </li>
        <li>
          <a href="/Classes" className="nav-link">
            <i className="fas fa-chalkboard-teacher"></i>
            <span>CLASSES</span>
          </a>
        </li>
        <li>
          <a href="/Services" className="nav-link">
            <i className="fas fa-concierge-bell"></i>
            <span>SERVICES</span>
          </a>
        </li>
        <li>
          <a href="/Facilities" className="nav-link">
            <i className="fas fa-dumbbell"></i>
            <span>FACILITIES</span>
          </a>
        </li>
      </ul>
    </div>

      <div className='main-dashboard'>
        <div className='row-container'>
          <div className='stats-container'>
            <div className='summary-item'>
              <div className='icon-container'>
                <i className="fas fa-user"></i>
              </div>
              <h1>Total Members</h1>
              <p>250</p>
            </div>
            <div className='summary-item'>
              <div className='icon-container'>
                <i className="fas fa-user-plus"></i>
              </div>
              <h1>New Members</h1>
              <p>15</p>
            </div>
            <div className='summary-item'>
              <div className='icon-container'>
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h1>Total Revenue</h1>
              <p>₱500k</p>
            </div>
          </div>

          <div className='chart pie-chart'>
            <h2>Members</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={data} dataKey="value" outerRadius={100} label>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className='chart bar-chart'>
            <h2>Members per Plan</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={planData} layout="vertical">
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="members" fill="#FF8C00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='additional-charts'>
        <div className='chart-container'>
            <h2>Client Overview</h2>
            <Client />
          </div>
          <div className='chart-container'>
            <h2>Revenue Overview</h2>
            <Revenue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
