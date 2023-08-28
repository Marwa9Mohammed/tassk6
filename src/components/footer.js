import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <div style={{ backgroundColor: "#8b0f0f", marginTop: "100px" }}>
        <div className="row">
          <div className="col-sm" style={{ marginTop: '10px' }}>
            <h5 style={{ color: "white" }}>GET IN TOUCH</h5>
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
            <span style={{ marginLeft: "10px", color: "white" }}>
              marwa.mohammed.20.9@gmail.com
            </span>
          </div>
          <div className="col-sm" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <button type="button" className="btn btn-outline-light">Contact Me</button>
          </div>
          <div className="col-sm"><FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: "white" }}/>
          <FontAwesomeIcon icon={faTwitter} size="2x"  style={{ color: "white", marginLeft:'10px' }} />
          <FontAwesomeIcon icon={faFacebook} size="2x"  style={{ color: "white", marginLeft:'10px' }} />

          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;