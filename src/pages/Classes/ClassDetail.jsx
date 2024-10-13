import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ClassDetail.css';

// Dummy data for class details
const classes = [
  { name: 'Class 1', description: 'Detailed description for class 1', id: 1 },
  { name: 'Class 2', description: 'Detailed description for class 2', id: 2 },
  { name: 'Class 3', description: 'Detailed description for class 3', id: 3 },
  { name: 'Class 4', description: 'Detailed description for class 4', id: 4 },
  { name: 'Class 5', description: 'Detailed description for class 5', id: 5 },
  { name: 'Class 6', description: 'Detailed description for class 6', id: 6 },
  { name: 'Class 7', description: 'Detailed description for class 7', id: 7 },
  { name: 'Class 8', description: 'Detailed description for class 8', id: 8 },
];

const kidsClasses = [
  { name: 'Class 1', description: 'Detailed description for kids class 1', id: 9 },
  { name: 'Class 2', description: 'Detailed description for kids class 2', id: 10 },
  { name: 'Class 3', description: 'Detailed description for kids class 3', id: 11 },
  { name: 'Class 4', description: 'Detailed description for kids class 4', id: 12 },
  { name: 'Class 5', description: 'Detailed description for kids class 5', id: 13 },
  { name: 'Class 6', description: 'Detailed description for kids class 6', id: 14 },
  { name: 'Class 7', description: 'Detailed description for kids class 7', id: 15 },
  { name: 'Class 8', description: 'Detailed description for kids class 8', id: 16 },
]

function ClassDetail() {
  const { classId } = useParams();
  const allClasses = [...classes, ...kidsClasses];
  const classItem = allClasses.find((c) => c.id === parseInt(classId));

  if (!classItem) {
    return (
      <div className="class-detail">
        <Link to="/classes">Go back</Link>
        <h1>Class not found</h1>
      </div>
    );
  }

  return (
    <div className="class-detail">
      <div className="class-detail-overlay">
        <Link to="/classes" className="go-back-button">Go back</Link>
      </div>
      <div className="class-detail-main-image-placeholder">
        {/* Placeholder for main image */}
      </div>
      <h1>{classItem.name}</h1>
      <p>{classItem.description}</p>

      {/* Placeholders for additional photos in two rows */}
      <div className="additional-photos">
        <div className="photo-row">
          <div className="additional-photo-placeholder"></div>
          <div className="additional-photo-placeholder"></div>
        </div>
        <div className="photo-row">
          <div className="additional-photo-placeholder"></div>
          <div className="additional-photo-placeholder"></div>
        </div>
      </div>
    </div>
  );

  
}

export default ClassDetail;
