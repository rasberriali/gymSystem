import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const servicehistory = [
    { id: 'S-0001', serviceName: 'Service Name Service Provider', date: '08/01/24', time: '2:00 PM', bookingDate: '07/27/24', status: 'Cancelled' },
    { id: 'S-0002', serviceName: 'Service Name Service Provider', date: '08/02/24', time: '2:00 PM', bookingDate: '07/28/24', status: 'Cancelled' },
];

const coachhistory = [
    { id: 'C-0004', coachName: 'Coach Name', date: '08/01/24', time: '2:00 PM', bookingDate: '07/27/24', status: 'Completed' },
    { id: 'C-0005', coachName: 'Coach Name', date: '08/02/24', time: '2:00 PM', bookingDate: '07/28/24', status: 'Cancelled' },
];


const ServicesHistory = () => {
    const [activeSection, setActiveSection] = useState('services');

    return (
        <div className="dashboard">
             <div className="user-info">
                <div className="avatar-placeholder"></div>
                <div className="user-details">
                    <h2>USER NAME</h2>
                    <p>@username</p>
                    <p>+639391234567</p>
                    <p>username@email.com</p>
                </div>
                <div className="user-actions">
                    <button>Edit Profile</button>
                    <button>QR Code</button>
                </div>
            </div>

        <div className="user-stats">
            <div className="stat-item">
                <i className="fa-regular fa-calendar"></i>
                <div className="stat-content">
                    <span className="value">30</span>
                    <span className="label">Check in</span>
                </div>
              </div>
            <div className="stat-item">
                <i className="fa-regular fa-calendar"></i>
                <div className="stat-content">
                    <span className="value">25</span>
                    <span className="label">Bookings</span>
                </div>
            </div>
            <div className="stat-item">
                <i className="fa-regular fa-calendar"></i>
                <div className="stat-content">
                    <span className="value">Active</span>
                    <span className="label">Status</span>
                </div>
            </div>
        </div>
            <div className="tabs">
                <div className="tab-button">
                    <Link className="sub-buttons" to="/active-plan"><button className="active">ACTIVE PLAN</button></Link>
                    <Link className="sub-buttons" to="/bookings"><button className="bookings">BOOKINGS</button></Link>
                </div>
                <div className="bookings-section">
                    <div className="action-buttons">
                        <button 
                            className={`coaches-button ${activeSection === 'coaches' ? 'active' : ''}`}
                            onClick={() => setActiveSection('coaches')}
                        >
                            COACHES
                        </button>
                        <button 
                            className={`services-button ${activeSection === 'services' ? 'active' : ''}`}
                            onClick={() => setActiveSection('services')}
                        >
                            SERVICES
                        </button>
                    </div>
                    
                    {activeSection === 'services' && (
                        <div className="table-container">
                            <div className="sub-buttons-container">
                            <Link className="sub-buttons" to="/bookings"><p>Your Bookings</p></Link>
                            <Link className="sub-buttons" to="/coaches-history"><p>History</p></Link>
                            <div className="vertical-line"></div>
                        </div>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Service Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Booking Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicehistory.map((history) => (
                                        <tr key={history.id}>
                                            <td>{history.id}</td>
                                            <td>{history.serviceName}</td>
                                            <td>{history.date}</td>
                                            <td>{history.time}</td>
                                            <td>{history.bookingDate}</td>
                                            <td>{history.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeSection === 'coaches' && (
                        <div className="table-container">
                            <div className="sub-buttons-container">
                            <Link className="sub-buttons" to="/bookings"><p>Your Bookings</p></Link>
                            <Link className="sub-buttons" to="/coaches-history"><p>History</p></Link>
                            <div className="vertical-line"></div>
                        </div>
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Coach Name</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Booking Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coachhistory.map((booking) => (
                                        <tr key={booking.id}>
                                            <td>{booking.id}</td>
                                            <td>{booking.coachName}</td>
                                            <td>{booking.date}</td>
                                            <td>{booking.time}</td>
                                            <td>{booking.bookingDate}</td>
                                            <td>{booking.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


export default ServicesHistory;
