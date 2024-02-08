import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import logo from "./logo.png";

const exportPDFWithMethod = () => {
  let element = container.current || document.body;
  savePDF(element, {
    paperSize: "auto",
    margin: 40,
    fileName: `Report for ${new Date().getFullYear()}`,
  });
};

function Result({
  age,
  gender,
  district,
  weight,
  bloodPressure,
  diabetes,
  longtermDisease,
  antiBiotics,
  ckd,
  waterIntake,
  weaterResourse,
  fertilizer,
  alcohol,
  tobacco,
  artificialBeverage,
}) {
  const [result, setResult] = useState("");
  const [name, setname] = useState("");

  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithMethod = () => {
    let element = container.current || document.body;
    savePDF(element, {
      paperSize: "auto",
      margin: 40,
      fileName: `Report for ${new Date().getFullYear()}`,
    });
  };

  useEffect(() => {
    const handleResult = async () => {
      const response = await axios.post(
        "https://ckd-risk-prediction-backend-python.azurewebsites.net/user",
        {
          Age: [parseInt(age)],
          Gender: [gender],
          Distict: [district],
          "Local Autority": ["Padaviya"],
          Weight: [parseInt(weight)],
          "Family History of CKD": [ckd],
          "Water intake": [parseInt(waterIntake)],
          "Blood Pressure": [bloodPressure],
          Diabetes_no: [diabetes],
          "Medications for diabetes/blood pressure": [longtermDisease],
          "Alchol consumption_yes": [alcohol],
          "Tobbaco Consumption": [tobacco],
          "Water resource": [weaterResourse],
          "Usage of Artificial beverages": [artificialBeverage],
          "Antibiotic Consumption": [antiBiotics],
          Fertilizer: [fertilizer],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResult(response.data);
    };

    handleResult();
  }, []);

  console.log({
    Age: [parseInt(age)],
    Gender: [gender],
    Distict: [district],
    "Local Autority": ["Padaviya"],
    Weight: [parseInt(weight)],
    "Family History of CKD": [ckd],
    "Water intake": [parseInt(waterIntake)],
    "Blood Pressure": [bloodPressure],
    Diabetes_no: [diabetes],
    "Medications for diabetes/blood pressure": [longtermDisease],
    "Alchol consumption_yes": [alcohol],
    "Tobbaco Consumption": [tobacco],
    "Water resource": [weaterResourse],
    "Usage of Artificial beverages": [artificialBeverage],
    "Antibiotic Consumption": [antiBiotics],
    Fertilizer: [fertilizer],
  });
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div className=" font-roboto">
      <div className="pr-[30px] bg-white pt-[14px] pb-[12px] pl-[20px] font-roboto border-[1px] border-[#DADCE0]  border-t-[10px] border-t-red-500 rounded-md ">
        <div className="flex justify-between">
          <div>Enter your name from here please</div>
          <div className="flex gap-[50px]">
            <div>
              <TextField
                id="filled-basic"
                variant="standard"
                placeholder="Your Answer"
                style={{
                  width: "300px",
                }}
                color="warning"
                type="text"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <button
              className="py-[7px] px-[10px] bg-red-600 text-white rounded-md font-opensans font-semibold"
              onClick={exportPDFWithMethod}
            >
              Download PDF
            </button>
          </div>
        </div>
        <div className="mt-[30px]">
          <PDFExport
            ref={pdfExportComponent}
            paperSize="auto"
            //margin={40}
            fileName={`Report for ${new Date().getFullYear()}`}
            author="KendoReact Team"
          >
            <div
              ref={container}
              style={{
                width: "100%",
              }}
            >
              <div className="border-[1px] border-black ">
                <div className="flex  items-center gap-[100px] py-[10px] px-[30px]">
                  <img src={logo} alt="" className="w-[200px]" />
                  <p className="text-[30px] font-opensans font-bold">
                    Risk Prediction Report
                  </p>
                </div>
                <hr className="h-[1px]  border-black" />
                <div className="px-[50px] py-[20px]">
                  <div className="personal">
                    <p className="text-[34px] font-mono font-semibold underline">
                      Personal Information
                    </p>
                    {/* perosnal */}
                    <div className="personal details">
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[200px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Person's Name
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {name == ""
                            ? "- - - Please Enter a Name - - -"
                            : name}
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[299px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Age
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {age} years
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[268px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Gender
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(gender)}
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[270px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            District
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(district)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* health */}
                  <div className="health mt-[15px]">
                    <p className="text-[34px] font-mono font-semibold underline">
                      Health Information
                    </p>
                    <div className="personal details">
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[268px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Weight
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {weight} kg
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[200px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Blood Pressure
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(bloodPressure)}
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[254px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Diabetes
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(diabetes)}
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[133px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Long-Tern Medication
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(longtermDisease)}
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[205px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            History of CKD
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(ckd)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Lifestyle Information */}
                  <div className="lifestyle mt-[15px]">
                    <p className="text-[34px] font-mono font-semibold underline">
                      Lifestyle Information
                    </p>
                    <div className="personal details">
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[135px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Average Water Intake
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {waterIntake} L
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[140px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Main Water Resource
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(weaterResourse)}
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[163px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Inoganic Fertilizers
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(fertilizer)}
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[136px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Alcohol Consumption
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(alcohol)}
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[125px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Tobacco Consumption
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(tobacco)}
                        </p>
                      </div>
                      <div className="flex gap-[40px]">
                        <div className="flex gap-[36px]">
                          <p className="font-poppins font-semibold text-[18px]">
                            Artificial Beverage Consumption
                          </p>
                          <p className="font-bold text-[18px]">-</p>
                        </div>
                        <p className="font-roboto font-normal text-[18px]">
                          {capitalizeFirstLetter(artificialBeverage)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex gap-[30px] mt-[30px] ${
                      result ? "text-red-600" : "text-green-700"
                    }`}
                  >
                    <p className="text-[30px] font-mono font-bold ">
                      Test Result
                    </p>
                    <p className="text-[30px] font-mono font-bold">-</p>
                    <p className="text-[30px] font-mono font-extrabold">
                      {result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PDFExport>
        </div>
      </div>
    </div>
  );
}

export default Result;
