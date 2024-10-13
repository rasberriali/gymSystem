import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

const CoachDetails = ({
  coach = {},
  startEditCoach,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  if (!coach || Object.keys(coach).length === 0) {
    return <div>No coach selected</div>;
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
  
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
  
    let calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<td key={`empty-${i}`}></td>);
    }
    for (let day = 1; day <= days; day++) {
      calendarDays.push(
        <td key={day}>
          <div className="date-cell">
            <span className="date-number">{day}</span>
            <div className="date-content"></div>
          </div>
        </td>
      );
    }
  
    const rows = [];
    let cells = [];
  
    calendarDays.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(day);
      }
      if (i === calendarDays.length - 1) {
        rows.push(cells);
      }
    });
  
    return (
      <div className="calendar-top">
        <h3>Schedule</h3>
        <div className="calendar-header">
            <button onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}>&lt;</button>
            <div className="month-year-container">
              <span className="month-year">{monthNames[month].toUpperCase()} {year}</span>
            </div>
            <button onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}>&gt;</button>
          </div>
      <div className="schedule-section">
        <div className="calendar">
          <table>
            <thead>
              <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => <tr key={i}>{row}</tr>)}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  };
  return (
    <div className="coach-detail">
      <div className="coach-header">
        <div className="coach-photo">
          {coach.photo ? (
            <img src={coach.photo} alt="Coach" />
          ) : (
            <div className="default-photo"></div>
          )}
        </div>
        <div className="coach-title">
          <h2>{coach.name.toUpperCase()}</h2>
          <p>{coach.email}</p>
        </div>
        <button className="edit-button" onClick={() => startEditCoach(coach)}>Edit</button>
      </div>
      <div className="coach-bio">
        <p>{coach.bio}</p>
      </div>
      <div className="coach-info">
        <div className="personal-info">
          <p><i className="fa-solid fa-cake-candles"></i> {formatDate(coach.dob)}</p>
          <p><i className="fa-solid fa-user"></i> {coach.age} years old</p>
          <p><i className="fa-solid fa-transgender"></i> {coach.gender}</p>
          <p><i className="fa-solid fa-phone"></i> {coach.phone}</p>
        </div>
        <div className="expertise-container">
          <h4>Expertise</h4>
          <ul className="expertise-list">
            {Array.isArray(coach.expertise) && coach.expertise.map((exp, idx) => (
              <li key={idx}>{exp}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="calendar-wrapper">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default CoachDetails;