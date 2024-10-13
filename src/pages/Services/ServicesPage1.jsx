import React from 'react';
import './Pages.css';

const ServicesPage1 = () => {
  return (
    <div className="services-page-1">
      <div className="facility-image-container">
        <button className="go-back-button" onClick={() => window.history.back()}>
          &#8592; Go Back
        </button>
        <div className="blank-box facility-image" />
      </div>

      <div className="content">
        <h1>Services Page 1</h1>
        <div className="introduction">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>

        <div className="services-subcategories">
          <h2>SERVICES OFFERED</h2>

          <div className="subcategory">
            <div className="blank-box subcategory-image" />
            <div className="subcategory-content">
              <h3>Services Subcategory</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Modi illo assumenda aperiam ipsum doloribus deserunt amet est mollitia velit, architecto nulla. 
                Ipsa soluta expedita nobis aperiam eum aliquam rem laboriosam.
              </p>
            </div>
          </div>

          <div className="subcategory">
            <div className="blank-box subcategory-image" />
            <div className="subcategory-content">
              <h3>Services Subcategory</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Modi illo assumenda aperiam ipsum doloribus deserunt amet est mollitia velit, architecto nulla. 
                Ipsa soluta expedita nobis aperiam eum aliquam rem laboriosam.
              </p>
            </div>
          </div>

          <div className="subcategory">
            <div className="blank-box subcategory-image" />
            <div className="subcategory-content">
              <h3>Service Subcategory</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Modi illo assumenda aperiam ipsum doloribus deserunt amet est mollitia velit, architecto nulla. 
                Ipsa soluta expedita nobis aperiam eum aliquam rem laboriosam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage1;
