import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      {/* What is React Section */}
      <Section title="What is React?">
        <p>
          React is a popular JavaScript library for building user interfaces. It allows developers to create reusable components, manage application state, and efficiently update the DOM through its virtual DOM system.
        </p>
      </Section>

      {/* Benefits of React Section */}
      <Section title="Benefits of React">
        <ul>
          <li>Reusable components</li>
          <li>Efficient updates through virtual DOM</li>
          <li>Strong community support</li>
          <li>Easy integration with other libraries</li>
          <li>Supports both web and mobile applications (via React Native)</li>
        </ul>
      </Section>

      <Section title="Helpful resources">
        <HelpfulResource
          link="https://react.dev/reference/react"
          label="Learn some more React"
        />
        <HelpfulResource
          link="https://www.builder.io/blog/react-component-library"
          label="React UI Component Libraries in 2025"
        />
        <HelpfulResource
          link="https://www.youtube.com/watch?v=w7ejDZ8SWv8"
          label="React Crash Course by Traversy Media"
        />
      </Section>
        <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
