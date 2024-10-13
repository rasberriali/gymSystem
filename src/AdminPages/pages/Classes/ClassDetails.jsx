import { format } from 'date-fns';
import React, { useState } from 'react';

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [classes, setClasses] = useState([]);

  const handleAddClass = () => {
    const newClass = {
      id: Date.now(),
      name: 'CLASS NAME',
      location: 'Location',
      coachName: 'Coach Name',
      date: new Date(),
      time: '1:00 PM',
      capacity: 50,
    };
    setClasses([...classes, newClass]);
  };

  const handleSelectClass = (classItem) => {
    setSelectedClass(classItem);
  };

  return (
    <div className="classes-container">
      <h1>Classes</h1>
      <div className="class-details-and-schedule">
        <div className="class-details">
          <h2>Class Details</h2>
          {selectedClass ? (
            <>
              <h3>{selectedClass.name}</h3>
              <p>Location: {selectedClass.location}</p>
              <p>Coach: {selectedClass.coachName}</p>
              <p>Date: {format(selectedClass.date, 'MMMM d, yyyy')}</p>
              <p>Time: {selectedClass.time}</p>
              <p>Capacity: {selectedClass.capacity} members</p>
            </>
          ) : (
            <p>Select a class to view details</p>
          )}
        </div>
        <div className="schedule">
          <h2>Schedule</h2>
          <Calendar />
        </div>
      </div>
      <div className="classes-list">
        <h2>Classes</h2>
        <button onClick={handleAddClass}>+ Add</button>
        <div className="class-grid">
          {classes.map((classItem) => (
            <div key={classItem.id} className="class-item" onClick={() => handleSelectClass(classItem)}>
              <div className="class-image-placeholder"></div>
              <h3>{classItem.name}</h3>
              <p>{classItem.location}</p>
              <p>{classItem.coachName}</p>
              <button>Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Calendar = () => {
  // Implement calendar component here
  return <div className="calendar">Calendar placeholder</div>;
};

export default Classes;