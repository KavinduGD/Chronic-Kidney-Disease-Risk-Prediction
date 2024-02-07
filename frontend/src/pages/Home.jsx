import React from "react";
import img from "./3.jpg";
function Home() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-right-bottom bg-fixed  sm:bg-top"
      style={{ backgroundImage: `url(${img})` }}
    >
      <p className="font-opensans text-6xl">sdsds</p>
    </div>
  );
}

export default Home;
