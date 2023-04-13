import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-around h-16 items-center">
      <div>
        <a href="/">
          <h1>Birddy</h1>
        </a>
      </div>
      <div className="flex gap-4">
        <a href="" id="home" className="hover:text-red-400">
          Home
        </a>
        <a href="" id="home" className="hover:text-red-400">
          How it works
        </a>
        <a href="" id="info" className="hover:text-red-400">
          Info
        </a>
        <a href="" id="news" className="hover:text-red-400">
          News
        </a>
        <a href="" id="contact" className="hover:text-red-400">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
