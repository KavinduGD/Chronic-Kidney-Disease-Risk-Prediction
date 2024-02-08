import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import { useState } from "react";
import HealthInfo from "../components/HealthInfo";
import LifestyleInfo from "../components/LifestyleInfo";
import Result from "../components/Result";

function Form() {
  // page
  const [page, setPage] = useState(1);
  // values
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [district, setDistrict] = useState("");
  const [weight, setWeight] = useState(0);
  const [bloodPressure, setBloodPressure] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [longtermDisease, setLongtermDisease] = useState("");
  const [antiBiotics, setAntiBiotics] = useState("");
  const [ckd, setCkd] = useState("");
  const [waterIntake, setWaterIntake] = useState(0);
  const [weaterResourse, setWaterResourse] = useState("");
  const [fertilizer, setFertilizer] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [tobacco, setTobacco] = useState("");
  const [artificialBeverage, setArtificialBeverage] = useState("");
  const [result, setResult] = useState("");

  const submit = (e) => {
    console.log("submit");
  };

  return (
    <div className="bg-[#FDE2E0] min-h-screen">
      <div>
        <div className="w-full bg-white flex justify-center items-center font-roboto text-[30px] py-[15px] ">
          {page === 4 ? (
            <p>Download Your Report</p>
          ) : (
            <p>Please Fill Below Information</p>
          )}
        </div>
        <div className="flex justify-center mt-[20px]">
          <div className="w-[65%]">
            {page === 1 && (
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
            )}
            {page === 2 && (
              <HealthInfo
                weight={weight}
                setWeight={setWeight}
                bloodPressure={bloodPressure}
                setBloodPressure={setBloodPressure}
                diabetes={diabetes}
                setDiabetes={setDiabetes}
                longtermDisease={longtermDisease}
                setLongtermDisease={setLongtermDisease}
                antiBiotics={antiBiotics}
                setAntiBiotics={setAntiBiotics}
                ckd={ckd}
                setCkd={setCkd}
                setPage={setPage}
              />
            )}
            {page === 3 && (
              <LifestyleInfo
                setPage={setPage}
                waterIntake={waterIntake}
                setWaterIntake={setWaterIntake}
                weaterResourse={weaterResourse}
                setWaterResourse={setWaterResourse}
                fertilizer={fertilizer}
                setFertilizer={setFertilizer}
                alcohol={alcohol}
                setAlcohol={setAlcohol}
                tobacco={tobacco}
                setTobacco={setTobacco}
                artificialBeverage={artificialBeverage}
                setArtificialBeverage={setArtificialBeverage}
              />
            )}

            {page === 4 && (
              <Result
                age={age}
                gender={gender}
                district={district}
                weight={weight}
                bloodPressure={bloodPressure}
                diabetes={diabetes}
                longtermDisease={longtermDisease}
                antiBiotics={antiBiotics}
                ckd={ckd}
                waterIntake={waterIntake}
                weaterResourse={weaterResourse}
                fertilizer={fertilizer}
                alcohol={alcohol}
                tobacco={tobacco}
                artificialBeverage={artificialBeverage}
                result={result}
                setResult={setResult}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
