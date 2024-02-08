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
                  <div className="helth"></div>
                  <p>{result}</p>
                  <div className="details">
                    <div className="flex gap-[30px]">
                      <p className="font-poppins font-semibold text-[18px]">
                        Person's Name
                      </p>
                      <p className="font-bold text-[18px]">-</p>
                      <p className="font-roboto font-normal text-[18px]">
                        {name}
                      </p>
                    </div>
                    <div className="flex gap-[30px]">
                      <p className="font-poppins font-semibold text-[18px]">
                        Age
                      </p>
                      <p className="font-bold text-[18px]">-</p>
                      <p className="font-roboto font-normal text-[18px]">
                        {age}
                      </p>
                    </div>
                    <div className="flex gap-[30px]">
                      <p className="font-poppins font-semibold text-[18px]">
                        Gender
                      </p>
                      <p className="font-bold text-[18px]">-</p>
                      <p className="font-roboto font-normal text-[18px]">
                        {gender}
                      </p>
                    </div>
                    <div className="flex gap-[30px]">
                      <p className="font-poppins font-semibold text-[18px]">
                        District
                      </p>
                      <p className="font-bold text-[18px]">-</p>
                      <p className="font-roboto font-normal text-[18px]">
                        {district}
                      </p>
                    </div>
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
