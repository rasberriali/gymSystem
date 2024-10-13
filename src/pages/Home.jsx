// src/pages/Home.jsx
import { faDumbbell, faPuzzlePiece, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../Assets/hero-sample.jpg';
import './Home.css';
import LoginModal from './Login/LoginModal'; // Correct import path

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const schedule = [
    { className: 'Class 1', coachName: 'Coach 1', time: '12:00 - 1:00', status: 'Ongoing' },
    { className: 'Class 2', coachName: 'Coach 2', time: '12:00 - 1:00', status: 'Ongoing' },
    { className: 'Class 3', coachName: 'Coach 3', time: '12:00 - 1:00', status: 'Ongoing' },
    { className: 'Class 4', coachName: 'Coach 4', time: '12:00 - 1:00', status: 'Ongoing' },
    { className: 'Class 5', coachName: 'Coach 5', time: '12:00 - 1:00', status: 'Ongoing' },
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-img-container">
          <img id="hero-img" src={hero} alt="Gym" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-container">
          <div className="tagline">
            <pre>{'YOUR FITNESS, YOUR FUTURE'}</pre>
          </div>
          <div className="tagline-text">
            <pre>{'COME JOIN US AND BECOME PHYSICALLY FIT!'}</pre>
          </div>
          <div className="join-btn">
            <button onClick={openLoginModal}>JOIN NOW</button>
          </div>
        </div>
      </section>
      <section className="program-section">
        <div className="section-title">FITNESS OFFERED</div>
        <div className="programs-container">
          <div className="program-details-container-left">
            <div className="program-icon">
              <FontAwesomeIcon icon={faDumbbell} size="2x" />
            </div>
            <div className="program-title">FITNESS 1</div>
            <div className="program-description">Lorem ipsum</div>
          </div>
          <div className="program-details-container">
            <div className="program-icon">
              <FontAwesomeIcon icon={faPuzzlePiece} size="2x" />
            </div>
            <div className="program-title">FITNESS 2</div>
            <div className="program-description">Lorem ipsum</div>
          </div>
          <div className="program-details-container-right">
            <div className="program-icon">
              <FontAwesomeIcon icon={faWheelchair} size="2x" />
            </div>
            <div className="program-title">FITNESS 3</div>
            <div className="program-description">Lorem ipsum</div>
          </div>
        </div>
      </section>
      <section className="table-section">
        <div className="announcement-container">
          <div className="announcement-details">
            <div className="announcement-tag">ANNOUNCEMENT</div>
            <div className="announcement-description">Lorem ipsum</div>
          </div>
          <div className="read-more">
            <button>Read more</button>
          </div>
        </div>
        <div className="classes-table">
          <h2>CLASSES SCHEDULE</h2>
          {schedule.map((item, index) => (
            <div key={index} className="class-item">
              <div className="class-details">
                <span className="class-name">{item.className}</span>
                <span className="coach-name">{item.coachName}</span>
              </div>
              <span className="time">{item.time}</span>
              <span className="status">{item.status}</span>
            </div>
          ))}
          <Link to="/Classes">
            <div className="see-all-btn">See all</div>
          </Link>
        </div>
      </section>
      <section className="services-section">
        <div className="section-title">SERVICES</div>
        <div className="services-container">
          <div className="services">
            <div className="service-name">SERVICE NAME</div>
          </div>
          <div className="services">
            <div className="service-name">SERVICE NAME</div>
          </div>
          <div className="services">
            <div className="service-name">SERVICE NAME</div>
          </div>
          <div className="services">
            <div className="service-name">SERVICE NAME</div>
          </div>
          <div className="services">
            <div className="service-name">SERVICE NAME</div>
          </div>
          <div className="services">
            <div className="service-name">SERVICE NAME</div>
          </div>
        </div>
      </section>
      <section className="latest-section">
        <div className="section-title">LATEST</div>
        <div className="latest-container">
          <a
            className="latest-details"
            href="https://fb.watch/tdFHAHSJaYvI_4B/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="latest-headline">Conditioning Workout</div>
          </a>
          <a
            className="latest-details"
            href="https://www.facebook.com/share/p/khUo4hjjsnaksMHhLZxTfF/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="latest-headline">Start showing up YOURSELF</div>
          </a>
          <a
            className="latest-details"
            href="https://www.facebook.com/share/r/MeaMKQkkalkUE8bLVG1Yi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="latest-headline">Gym in their own BINIVERSE</div>
          </a>
          <a
            className="latest-details"
            href="https://www.facebook.com/reel/46059728898469627769"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="latest-headline">See the coaches</div>
          </a>
          <a
            className="latest-details"
            href="https://www.facebook.com/share/p/tYYHV47MeVBHGVcD3gH/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="latest-headline">Want to be a member?</div>
          </a>
        </div>
      </section>
      <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} />
    </div>
  );
};

export default Home;
