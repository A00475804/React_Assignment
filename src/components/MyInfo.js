import React from 'react';

const AboutMe = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  };

  const contentStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>RAJ MEHTA</h1>
        <p>I am a Graduate student at Saint Mary's University.
          Before joining this program I was working as Programmer Analyst in Cognizant India.
          I worked there for 2 years </p>
        <p>The reason for joining MCDA program is that student get to learn about various technologies
          that are in demand in the present and predicted to be in the future so the student can be ready to work with anything and excel in the future..
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
