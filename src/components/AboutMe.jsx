import React from 'react';
import me from '../assets/me.jpeg';

const AboutMe = () => {
  return (
    <div className='about-me'>
        <img src={me} alt="me" />
        <p>
        <strong>Name:</strong> Franklin Blation <br />
        <strong>Spec:</strong> Fullstack Web Development <br />
        <strong>Trimester:</strong> 5th Triemester <br />
        <strong>Favorite Technologies:</strong> React, Node.js, Python <br />
        <strong>What I want to do after school:</strong> Build interactive web applications and work on innovative projects that help people connect through technology. <br />
        <strong>Hobbies:</strong> Playing guitar, hiking, screen printing, and gaming.
      </p>

    </div>

  );
};

export default AboutMe;