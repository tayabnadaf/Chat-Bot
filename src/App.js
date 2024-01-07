import React from "react";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="App" style={{ marginTop: "50px",backgroundcolor:'black' }}>
      <div
        style={{
          border: "1px solid black",
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "gray",
          color: "white",
        }}
      >
        <h1>Namma Metro</h1>
      </div>
      <Chat />
    </div>
  );
}

export default App;
