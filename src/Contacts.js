import React, { useRef, useState } from 'react';
import './Contacts.css';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

export default function Contacts() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_tbaerri',
        'template_iok4d45',
        form.current,
        'gjfF9yke7kShjm6XW'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container container-md" id="contacts" data-aos="fade-up">
      
      <h2 className="contact-title glow-text text-center">
  Contact Details
  <span className="underline"></span>
</h2>


      <div className="row contact-content">
        {/* Left Info Section */}
        <div className="col-md-5 contact-info" data-aos="fade-right">
          <p><FaEnvelope className="icon" /> Email: <a href="mailto:asifnasimansari10@gmail.com">asifnasimansari10@gmail.com</a></p>
          <p><FaPhoneAlt className="icon" /> Phone: +91 84820 29589</p>
          <p><FaGithub className="icon" /> GitHub: <a href="https://github.com/asif-ansari10" target="_blank" rel="noreferrer">github.com/asif-ansari10</a></p>
          <p><FaLinkedin className="icon" /> LinkedIn: <a href="https://www.linkedin.com/in/asif-naseem-ansari-00260919a/" target="_blank" rel="noreferrer">linkedin.com/in/asif-naseem-ansari</a></p>
          <p><FaMapMarkerAlt className="icon" /> Location: Kolkata, India</p>
        </div>

        {/* Right Form Section */}
        <div className="col-md-7">
          <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="fade-left">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="custom-btn primary-btn">Send Message</button>
            {isSent && <p className="success-message">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
