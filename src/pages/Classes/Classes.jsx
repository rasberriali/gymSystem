import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Classes.css';

const generalClasses = [
  { name: 'Class 1', description: 'Description for class 1', id: 1 },
  { name: 'Class 2', description: 'Description for class 2', id: 2 },
  { name: 'Class 3', description: 'Description for class 3', id: 3 },
  { name: 'Class 4', description: 'Description for class 4', id: 4 },
  { name: 'Class 5', description: 'Description for class 5', id: 5 },
  { name: 'Class 6', description: 'Description for class 6', id: 6 },
  { name: 'Class 7', description: 'Description for class 7', id: 7 },
  { name: 'Class 8', description: 'Description for class 8', id: 8 },
];

const kidsClasses = [
  { name: 'Class 1', description: 'Description for kids class 1', id: 9 },
  { name: 'Class 2', description: 'Description for kids class 2', id: 10 },
  { name: 'Class 3', description: 'Description for kids class 3', id: 11 },
  { name: 'Class 4', description: 'Description for kids class 4', id: 12 },
  { name: 'Class 5', description: 'Description for kids class 5', id: 13 },
  { name: 'Class 6', description: 'Description for kids class 6', id: 14 },
  { name: 'Class 7', description: 'Description for kids class 7', id: 15 },
  { name: 'Class 8', description: 'Description for kids class 8', id: 16 },
];

const generalSchedule = [
  { className: 'Class 1', coachName: 'Coach 1', time: '12:00 - 1:00', status: 'Ongoing' },
  { className: 'Class 2', coachName: 'Coach 2', time: '12:00 - 1:00', status: 'Ongoing' },
  { className: 'Class 3', coachName: 'Coach 3', time: '12:00 - 1:00', status: 'Ongoing' },
  { className: 'Class 4', coachName: 'Coach 4', time: '12:00 - 1:00', status: 'Ongoing' },
  { className: 'Class 5', coachName: 'Coach 5', time: '12:00 - 1:00', status: 'Ongoing' },
  { className: 'Class 6', coachName: 'Coach 6', time: '12:00 - 1:00', status: 'Ongoing' },
  { className: 'Class 7', coachName: 'Coach 7', time: '12:00 - 1:00', status: 'Ongoing' },
  { className: 'Class 8', coachName: 'Coach 8', time: '12:00 - 1:00', status: 'Ongoing' },
];

const kidsSchedule = [
  { className: 'Class 1', coachName: 'Coach 1', time: '10:00 - 11:00', status: 'Ongoing' },
  { className: 'Class 2', coachName: 'Coach 2', time: '10:00 - 11:00', status: 'Ongoing' },
  { className: 'Class 3', coachName: 'Coach 3', time: '10:00 - 11:00', status: 'Ongoing' },
  { className: 'Class 4', coachName: 'Coach 4', time: '10:00 - 11:00', status: 'Ongoing' },
  { className: 'Class 5', coachName: 'Coach 5', time: '10:00 - 11:00', status: 'Ongoing' },
  { className: 'Class 6', coachName: 'Coach 6', time: '10:00 - 11:00', status: 'Ongoing' },
  { className: 'Class 7', coachName: 'Coach 7', time: '10:00 - 11:00', status: 'Ongoing' },
  { className: 'Class 8', coachName: 'Coach 8', time: '10:00 - 11:00', status: 'Ongoing' },
];

const handleButtonClick = (e) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  button.style.setProperty('--mouse-x', `${x}px`);
  button.style.setProperty('--mouse-y', `${y}px`);
};

const ClassTitle = ({ title }) => {
  return (
    <div className="class-title">
      <h1>{title}</h1>
    </div>
  );
};

const ClassCard = ({ name, description, id }) => {
  return (
    <div className="class-card">
      <Link to={`/class/${id}`}>
        <div className="class-image-placeholder">
          <div className="class-overlay">
            <h1>{name}</h1>
            <p>View More</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ClassSchedule = ({ schedule }) => {
  return (
    <div className="class-schedule">
      <h2>CLASSES SCHEDULE</h2>
      {schedule.map((item, index) => (
        <div key={index} className="schedule-item">
          <div className="class-details">
            <span className="class-name">{item.className}</span>
            <span className="coach-name">{item.coachName}</span>
          </div>
          <span className="time">{item.time}</span>
          <span className="status">{item.status}</span>
        </div>
      ))}
    </div>
  );
};

const Classes = () => {
  const [activeTab, setActiveTab] = useState('general');

  const renderClasses = (classes) => {
    return classes.map((classItem, index) => (
      <ClassCard
        key={index}
        name={classItem.name}
        description={classItem.description}
        id={classItem.id}
      />
    ));
  };

  const renderSchedule = (schedule) => {
    return <ClassSchedule schedule={schedule} />;
  };

  return (
    <div className="classes">
      <div className='tab-container'>
        <ClassTitle title={activeTab === 'general' ? "General Classes" : "Kids Classes"} />
      </div>
      {activeTab === 'general' && (
        <div className="content-wrapper">
          <div className="tab-buttons">
          <button 
              onClick={(e) => {
                setActiveTab('general');
                handleButtonClick(e);
              }}
            >
              General
            </button>
            <button 
              onClick={(e) => {
                setActiveTab('kids');
                handleButtonClick(e);
              }}
            >
              Kids
            </button>
          </div>
          <div className="class-cards">{renderClasses(generalClasses)}</div>
          {renderSchedule(generalSchedule)}
        </div>
      )}
      {activeTab === 'kids' && (
        <div className="content-wrapper">
          <div className="tab-buttons">
            <button 
              className="btn-flip" 
              data-front="General" 
              data-back="Classes" 
              onClick={() => setActiveTab('general')}
            >General</button>
            <button 
              className="btn-flip" 
              data-front="Kids" 
              data-back="Classes" 
              onClick={() => setActiveTab('kids')}
            >Kids</button>
          </div>
          <div className="class-cards">{renderClasses(kidsClasses)}</div>
          {renderSchedule(kidsSchedule)}
        </div>
      )}
    </div>
  );
};

export default Classes;
