import React from 'react';
import '../styles/PhoneFrame.css';

const PhoneFrame = ({ children }) => {
  return (
    <div className="phone-container">
      <div className="iphone-frame">
        <div className="iphone-notch"></div>
        <div className="iphone-screen">
          {children}
        </div>
      </div>
      <div className="phone-view-controls hidden-mobile">
        <h2 className="font-bold text-3xl mb-4">Mobile App Demo</h2>
        <p className="text-muted mb-6">
          This simulates the **Phase 3** dedicated iOS/Android app. 
          The "3-Click Rule" is in full effect here, allowing customers to 
          check, change, or pause deliveries in seconds.
        </p>
        <div className="card" style={{border: '1px dashed var(--color-primary)'}}>
          <h4 className="font-semibold mb-2">Key Mobile UX Features:</h4>
          <ul className="flex-col gap-2 text-sm text-muted" style={{paddingLeft: '1.25rem'}}>
            <li>Haptic-ready quantity selectors</li>
            <li>One-tap "Top-Up" additions</li>
            <li>Biometric Login for payments</li>
            <li>Real-time Round Book updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
