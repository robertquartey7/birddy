import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <div className="px-10 relative py-36 ">
      <div className="absolute top-10 right-10  bg-blend-multiply -z-10">
        <img
          src="/img/hero_bird.png"
          alt=""
          className="-z-10 w-96 bg-blend-normal "
        />
      </div>
      <div className="w-1/2">
        <p className="text-5xl">
          <span className="font-bold">Helping you </span>get information about
          your bird
        </p>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}

export default Hero;
