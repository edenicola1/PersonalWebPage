import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "../Components/Header.jsx";
import Body from "../Components/Body.jsx";
import Footer from "../Components/Footer.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Coding');

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Update the loading text
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        if (prevText === 'Coding...') {
          return 'Coding';
        } else {
          return prevText + '.';
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div id="container">
        {isLoading ? (
          <div className="loading">
            <h2 className="loadingTitle">{loadingText}</h2>
            <img src="../comp_2_2.gif" alt="Typing Animation" className="typing-animation" />
          </div>
        ) : (
          <>
            <Header />
            <Body />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
