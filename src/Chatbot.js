
// Chatbot.js
import React, { useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleNewUserMessage = async (newMessage) => {
    // Use Dialogflow API to send the user's message and get a response
    // Replace 'YOUR_DIALOGFLOW_API_KEY' and 'YOUR_DIALOGFLOW_PROJECT_ID' with your actual credentials
    const apiKey = 'AIzaSyDpMDgaHrFX4YJ2-D1xBynUsTH7_FOUric';
    const projectId = 'mushahirmohamed-rcyp';
    const sessionId = uuidv4(); // Generate a unique session ID using uuid

    const response = await fetch(
      `https://dialogflow.googleapis.com/v2/projects/${projectId}/agent/sessions/${sessionId}:detectIntent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          queryInput: {
            text: {
              text: newMessage,
              languageCode: 'en-US',
            },
          },
        }),
      }
    );

    const data = await response.json();
    const reply = data.queryResult.fulfillmentText;

    addResponseMessage(reply);
  };

  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="My Chatbot"
        subtitle="Hello, how can I assist you today?"
        profileAvatar="path/to/avatar.png"
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />
    </div>
  );
};

export default Chatbot;
