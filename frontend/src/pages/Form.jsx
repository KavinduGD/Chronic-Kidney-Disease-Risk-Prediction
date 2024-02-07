import React from "react";
import PersonalInfo from "../components/PersonalInfo";

function Form() {
  return (
    <div className="bg-[#FDE2E0] min-h-screen">
      <div>
        <div className="w-full bg-white flex justify-center items-center font-roboto text-[30px] py-[15px] ">
          <p>Please Fill Below Information</p>
        </div>
        <div className="flex justify-center mt-[20px]">
          <div className="w-[65%]">
            <PersonalInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
