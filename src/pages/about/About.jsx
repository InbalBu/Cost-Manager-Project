import React from 'react';
import './sidebar.css';
import logo from './logo.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="content-container">
        <h1 className="title">About Us</h1>
        <p className="description">
          We are Omer Boucris and Bar Bikovsky, two passionate developers who
          love creating beautiful and functional web applications. Our goal is
          to help businesses and individuals achieve their goals by leveraging
          the power of the web.
        </p>
        <p className="description">
          With years of experience in web development, we have the skills and
          knowledge to create custom solutions tailored to your needs. We use
          cutting-edge technologies and best practices to deliver high-quality
          work that exceeds your expectations.
        </p>
        <p className="description">
          Whether you need a simple website or a complex web application, we
          have the expertise to make it happen. Contact us today to see how we
          can help you grow your online presence and achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default About;