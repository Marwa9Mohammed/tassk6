import React from 'react';
import './app.css';


function nav() {
    return (
      <div>
        <img src="./mm.jpg" alt="Snow" style={{ width: '1600px',height:'600px',padding:5 }} />
        <div className="overlay-text">Marwa Mohammed</div>
        <div className="lay-text">Web Developer & Design</div>
        <div className="button-container">
          <button className="centered-button">Contact Me</button>
        </div>
        </div>
    )
}
export default nav;