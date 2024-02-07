import React from "react";
import img from "./2.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-left-top flex flex-row-reverse "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="w-[550px] mr-[40px] mt-[50px] flex flex-col items-start "
        style={{ lineHeight: 1.3 }}
      >
        <p
          className="font-roboto text-[70px] font-extrabold text-red-600 "
          // style={{ textShadow: "1px 1px 3px red" }}
        >
          Chronic Kidney Disease Risk Prediction
        </p>
        <button
          className="mt-[140px] py-[20px] px-[40px] text-[16px] font-poppins text-white bg-red-600 rounded-lg font-medium "
          onClick={() => {
            navigate("/form");
          }}
        >
          Test the Kidney Health Risk Here
        </button>
      </div>
    </div>
  );
}

export default Home;
