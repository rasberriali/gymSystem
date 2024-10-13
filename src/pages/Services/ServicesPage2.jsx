import React from 'react';
import './Pages.css';

const ServicesPage2 = () => {
  return (
    <div className="services-page-2">
      <div className="facility-image-container">
        <button className="go-back-button" onClick={() => window.history.back()}>
          &#8592; Go Back
        </button>
        <div className="blank-box facility-image" />
      </div>

      <div className="content">
        <h1>Services Page 2</h1>
        <div className="introduction">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage2;
