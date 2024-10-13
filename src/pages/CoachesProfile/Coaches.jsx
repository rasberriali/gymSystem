import React from 'react';
import { Link } from 'react-router-dom';
import samplePhoto from "../../Assets/assets_coach/sample-photo.jpg";
import samplePhoto1 from "../../Assets/assets_coach/sample-photo1.jpg";
import './Coaches.css';

const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

const Coaches = () => {
  const coaches = [
    { id: 1, name: 'Coach 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: [samplePhoto] },
    { id: 2, name: 'Coach 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '' },
    { id: 3, name: 'Coach 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '' },
    { id: 4, name: 'Coach 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '' },
    { id: 5, name: 'Coach 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: [samplePhoto1] },
  ];

  return (
    <div className="coaches-container">
      {coaches.map((coach) => (
        <div key={coach.id} className="coach-card">
          <Link to={`/coach/${coach.id}`}>
            <div className="coach-picture" style={{ backgroundImage: `url(${coach.image || defaultImage})` }}></div>
            <div className="coach-info">
              <h3>{coach.name}</h3>
              <p>{coach.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Coaches;
