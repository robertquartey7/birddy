import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <Work/>
    </div>
  );
}

export default App;
