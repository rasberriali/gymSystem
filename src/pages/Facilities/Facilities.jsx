import React from 'react';
import './Facilities.css';

const Facilities = () => {
  const facilities = [
    { image: 'path-to-image1.jpg', name: 'Facility 1', description: 'Description 1' },
    { image: 'path-to-image2.jpg', name: 'Facility 2', description: 'Description 2' },
    { image: 'path-to-image3.jpg', name: 'Facility 3', description: 'Description 3' },
    { image: 'path-to-image4.jpg', name: 'Facility 4', description: 'Description 4' },
    { image: 'path-to-image5.jpg', name: 'Facility 5', description: 'Description 5' },
    { image: 'path-to-image6.jpg', name: 'Facility 6', description: 'Description 6' },
    { image: 'path-to-image7.jpg', name: 'Facility 7', description: 'Description 7' },
    { image: 'path-to-image8.jpg', name: 'Facility 8', description: 'Description 8' },
    { image: 'path-to-image9.jpg', name: 'Facility 9', description: 'Description 9' },
  ];

  return (
    <div className="facility-grid">
      {facilities.map((facility, index) => (
        <div key={index} className="facility-box">
          <div className="facility-image" style={{ backgroundImage: `url(${facility.image})` }}>
            <div className="overlay">
              <span className="overlay-name">{facility.name}</span>
              <span className="overlay-description">{facility.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
