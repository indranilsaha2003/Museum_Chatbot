import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

function Chatbot({ toggleChat }) {
  const [messages, setMessages] = useState([{ text: 'Ask anything to our chatbot', type: 'defPopupMsg' }]);
  const [inputText, setInputText] = useState('');
  const chatContentRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat content when new messages are added
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    displayMessage(inputText, 'sender');
    setInputText('');

    setTimeout(() => {
      displayMessage('This is a chatbot response.', 'receiver');
    }, 1000);
  };

  const displayMessage = (text, type) => {
    setMessages(prevMessages => [...prevMessages, { text, type }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <span>Chatbot</span>
        <button className="close-chat-button" onClick={toggleChat}>
          ×
        </button>
      </div>
      <div className="chat-content" ref={chatContentRef}>
        {messages.map((message, index) => (
          <p key={index} className={message.type === 'defPopupMsg' ? 'defPopupMsg' : `message ${message.type}`}>
            {message.text}
          </p>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && sendMessage()}
          className="chat-input"
          placeholder="Type a message..."
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;