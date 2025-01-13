import React from 'react';
import morningImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightImage from '../assets/night.svg';

const Greeting = () => {
  const hour = new Date().getHours();

  let greetingText = '';
  let imageSrc = '';

  if (hour >= 6 && hour < 12) {
    greetingText = 'Good Morning!';
    imageSrc = morningImage;
  } else if (hour >= 12 && hour < 17) {
    greetingText = 'Good Afternoon!';
    imageSrc = morningImage;
  } else if (hour >= 17 && hour < 21) {
    greetingText = 'Good Evening!';
    imageSrc = eveningImage;
  } else {
    greetingText = 'Good Night!';
    imageSrc = nightImage;
  }

  return (
    <h1 className="greeting">
      <img src={imageSrc} alt={greetingText} />
      {greetingText}
    </h1>
  );
};

export default Greeting;