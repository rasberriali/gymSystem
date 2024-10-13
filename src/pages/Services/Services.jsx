import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <section className='services-section'>
      <div className='section-title'>SERVICES OFFERED</div>
      <div className='services-container'>
        <Link className='service-details' to='/services-page-1'>
          <div className='service-img-container blank-box'>
            <div className='overlay'>
              <div className='service-headline'>Services1</div>
            </div>
          </div>
        </Link>
        <Link className='service-details' to='/services-page-2'>
          <div className='service-img-container blank-box'>
            <div className='overlay'>
              <div className='service-headline'>Services2</div>
            </div>
          </div>
        </Link>
        <Link className='service-details' to='/services-page-1'>
          <div className='service-img-container blank-box'>
            <div className='overlay'>
              <div className='service-headline'>Services3</div>
            </div>
          </div>
        </Link>
        <Link className='service-details' to='/services-page-2'>
          <div className='service-img-container blank-box'>
            <div className='overlay'>
              <div className='service-headline'>Services4</div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
