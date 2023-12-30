import React from "react";
import "./About.css";


import phone from "../assets/phone.png";
import msg from "../assets/msg.png";


function About() {
  return (
    <div className = "Aboutus">
    <div> </div>
    <div className="contact-container">
      <p className="Contact">Contact us</p>
      <div className = "flex1">
        <img src={msg} alt="Logo 2" className="contact-logo" />
        <p className="contact-info"><a href="mailto:soma@iiit.ac.in">Dr. Soma Paul</a></p>
        {/* <img src={phone} alt="Logo 1" className="contact-logo" />
        <p className="contact-info">123-456-7890</p> */}
      </div> 
      <div className = "flex1">
        <img src={msg} alt="Logo 2" className="contact-logo" />
        <p className="contact-info"><a href="mailto:sukhada.hss@iitbhu.ac.in">Dr. Sukhada</a></p>
      </div>
    </div>
    <div>
      <p className = "Back"> <b>About the company</b></p> 
      <p className = "Desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan vel praesent maecenas mauris, dignissim massa. Et vel neque fermentum ipsum cursus nunc, quam varius. Eu ut scelerisque </p>

    </div>
  </div>
  );
}

export default About;
