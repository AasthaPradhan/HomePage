import React from 'react';
import '../styles/Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Our Features</h2>
      <div className="feature-items">
        <div className="feature">
          <h3>Feature 1</h3>
          <p>This is a description of feature 1.</p>
        </div>
        <div className="feature">
          <h3>Feature 2</h3>
          <p>This is a description of feature 2.</p>
        </div>
        <div className="feature">
          <h3>Feature 3</h3>
          <p>This is a description of feature 3.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
