import React, { useState } from 'react';
import Navbar from './Navbar';
import Chatbot from './Chatbot';
import './Homepage.css';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to toggle the chatbot visibility
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      <Navbar /> {/* Include the Navbar component */}

      {/* Video background and overlay content */}
      <video className="background-video" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + "/videoplayback.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content">
        <h1>Welcome to the World of Museums</h1>
        <h2>Book Now using our Chatbot</h2>
        <button className="book-now-button" onClick={toggleChat}>
          <span>Start Booking</span>
        </button>
      </div>

      {/* Chatbot component, visible only when isChatOpen is true */}
      {isChatOpen && <Chatbot toggleChat={toggleChat} />}
    </div>
  );
}

export default App;
