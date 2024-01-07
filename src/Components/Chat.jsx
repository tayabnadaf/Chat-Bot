import React, { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const getReplys = {
    hi: "Hello! How can I help you?",
    qrticket: "Please type source location",
    yeswanthpur: "Please type destination location",
    sandalsoap: `Please Confirm your qr ticket is 
    from yeshwanthput to sandal soap`,
    yes: "Here's your qr ticket",
  };
  function handleSendMessage() {
    const userInput = input;
    const getReply = getReplys[userInput];
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, user: "user" },
    ]);
    if (getReply) {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: getReply, user: "bot" },
        ]);
      }, 1000);
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Invalid key. Please enter a valid key.", user: "bot" },
      ]);
    }
    setInput("");
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "#008080",
      }}
    >
      <div
        style={{
          height: "700px",
          overflowY: "auto",
          border: "2px solid black",
          borderRadius: "10px",
          padding: "10px", // Add padding for better appearance
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              padding: "0px",
              textAlign: message.user === "bot" ? "left" : "right",
            }}
          >
            {message.image ? (
              <img
                src={message.image}
                alt="Bot Response"
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            ) : (
              <span
                style={{
                  borderRadius: "8px",
                  padding: "8px",
                  backgroundColor: message.user === "bot" ? "grey" : "green",
                  color: message.user === "bot" ? "#000" : "#fff", // Text color
                  display: "inline-block", // Ensure proper display
                }}
              >
                {message.text}
              </span>
            )}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the messege"
          style={{
            width: "100%", // Make the input box the same width as the container
            padding: "10px", // Add padding for better appearance
            borderRadius: "4px", // Add border radius for rounded corners
            marginRight: "8px", // Add some space between input and button
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "10px", // Add padding for better appearance
            borderRadius: "4px", // Add border radius for rounded corners
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
