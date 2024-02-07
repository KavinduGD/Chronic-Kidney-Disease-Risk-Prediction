import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";

const normalInputStyle =
  "py-[16px] pl-3 focus:outline-none rounded-md border-[1px] border-gray-300 text-sm text-[#000] font-normal";
const normalLabelStyle =
  "font-roboto text-[16px] font-semibold leading-[92%] text-[#383838]";

function PersonalInfo() {
  const [seatingCapacity, setSeatingCapacity] = React.useState(0);

  return (
    <div>
      <div className="bg-white pt-[20px] pl-[15px] font-roboto border-t-[10px] border-t-[#673AB7] rounded-xl">
        <p className="text-[36px] text-[#202124]">Personal Information</p>
        <p className="text-[#202132] text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          molestias. Assumenda, molestias.
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
