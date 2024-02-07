import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import { useState } from "react";

function Form() {
  // page
  const [page, setPage] = useState(1);
  // values
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [district, setDistrict] = useState("");

  console.log("age", gender, age, district, page);
  return (
    <div className="bg-[#FDE2E0] min-h-screen">
      <div>
        <div className="w-full bg-white flex justify-center items-center font-roboto text-[30px] py-[15px] ">
          <p>Please Fill Below Information</p>
          {age}
          {gender}
          {district}
          {page}
        </div>
        <div className="flex justify-center mt-[20px]">
          <div className="w-[65%]">
            <PersonalInfo
              setAge={setAge}
              setGender={setGender}
              setDistrict={setDistrict}
              age={age}
              gender={gender}
              district={district}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
