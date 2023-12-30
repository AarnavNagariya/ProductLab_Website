import React from "react";
import "./About.css";

import phone from "../assets/phone.png";
import msg from "../assets/msg.png";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="Aboutus">
      <div className="contact-container">
        <p className="Contact">Contact us</p>
        <div>
          <div className="flex1">
            <Image src={msg} alt="Logo 2" className="contact-logo" />
            <p className="contact-info"><Link className="about-link" href="mailto:soma@iiit.ac.in">Dr. Soma Paul</Link></p>
            {/* <Image src={phone} alt="Logo 1" className="contact-logo" />
            <p className="contact-info">123-456-7890</p> */}
          </div>
          <div className="flex1">
            <Image src={msg} alt="Logo 2" className="contact-logo" />
            <p className="contact-info"><Link className="about-link" href="mailto:sukhada.hss@iitbhu.ac.in">Dr. Sukhada</Link></p>
          </div>
        </div>
      </div>
      <div>
        <p className="Back"> <b>About the company</b></p>
        <p className="Desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan vel praesent maecenas mauris, dignissim massa. Et vel neque fermentum ipsum cursus nunc, quam varius. Eu ut scelerisque </p>

      </div>
    </div>
  );
}

export default About;
