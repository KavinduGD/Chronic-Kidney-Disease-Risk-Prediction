import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import logo from "./logo.png";
import waringImg from "./warning.png";
import pass from "./pass.png";

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
  setColor,
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

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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

      if (response.data === "high") {
        setColor("#f22952");
      } else {
        setColor("#50C878");
      }
    };

    handleResult();
  }, []);

  console.log({
    Age: [parseInt(age)],
    Gender: [gender],
    Distict: [district],
    "Local Autority": [""],
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

  // console.log(result);
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
                      result == "high" ? "text-red-600" : "text-green-700"
                    } items-center`}
                  >
                    <p className="text-[30px] font-mono font-bold ">
                      Test Result
                    </p>
                    <p className="text-[30px] font-mono font-bold">-</p>
                    <div className="flex items-center gap-[180px]">
                      <p className="text-[30px] font-mono font-extrabold">
                        {capitalizeFirstLetter(result)}
                      </p>
                      <img
                        src={result === "high" ? waringImg : pass}
                        className={
                          result === "high" ? "w-[300px]" : "w-[200px]"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Expert Advice */}
              {result === "high" && (
                <div>
                  <p className="text-[34px] font-mono font-semibold underline mt-[30px]">
                    Expert Advice
                  </p>
                  <div className="pl-[40px]">
                    <p className="font-roboto text-[18px]">
                      1.Do this reccomended tests
                    </p>
                    <div className="flex mt-[5px]">
                      <div className="flex-1 flex flex-col ">
                        <p className="text-[20px] font-poppins font-semibold text-gray-700">
                          Blood tests
                        </p>
                        <ul
                          className="list-disc pl-[40px] "
                          style={{ lineHeight: 1.3 }}
                        >
                          <li className="text-[15px] font-roboto font-medium">
                            Serum Creatinine
                          </li>
                          <li className="text-[15px] font-roboto font-medium">
                            Blood Urea Nitrogen (BUN)
                          </li>
                          <li className="text-[15px] font-roboto font-medium">
                            Estimated Glomerular Filtration Rate
                          </li>
                          <li className="text-[15px] font-roboto font-medium">
                            Electrolyte Levels
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p className="text-[20px] font-poppins font-semibold text-gray-700">
                          Urine tests
                        </p>
                        <ul
                          className="list-disc pl-[40px] "
                          style={{ lineHeight: 1.3 }}
                        >
                          <li className="text-[15px] font-roboto font-medium">
                            Urinalysis
                          </li>
                          <li className="text-[15px] font-roboto font-medium">
                            Urine Albumin-to-Creatinine Ratio (ACR)
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <p className="text-[20px] font-poppins font-semibold text-gray-700">
                          Imaging tests
                        </p>
                        <ul
                          className="list-disc pl-[40px] mb-[50px]"
                          style={{ lineHeight: 1.3 }}
                        >
                          <li className="text-[15px] font-roboto font-medium">
                            Ultrasound
                          </li>
                          <li className="text-[15px] font-roboto font-medium">
                            CT Scan
                          </li>
                        </ul>
                      </div>
                    </div>

                    <p className="font-roboto text-[18px] ">
                      2.Consult with the following healthcare professionals
                    </p>
                    <div>
                      <ul className="list-disc pl-[40px] ">
                        <li className="text-[15px] font-roboto font-medium">
                          Primary Care Physician (PCP): Your primary care
                          physician serves as the first point of contact for
                          your healthcare needs.
                        </li>
                        <li className="text-[15px] font-roboto font-medium">
                          Nephrologist: A nephrologist is a doctor who
                          specializes in diagnosing and treating kidney
                          diseases.
                        </li>
                        <li className="text-[15px] font-roboto font-medium">
                          Registered Dietitian: A registered dietitian who
                          specializes in kidney disease can provide valuable
                          guidance on managing your diet to support kidney
                          health.
                        </li>
                        <li className="text-[15px] font-roboto font-medium">
                          Urologist: Urologists specialize in the urinary
                          system, including the kidneys.
                        </li>
                      </ul>
                    </div>
                    <p className="font-roboto text-[18px] mt-[5px]">
                      3.Inappropriate food and drink
                    </p>
                    <ul
                      className="list-disc pl-[40px] mb-[50px]"
                      style={{ lineHeight: 1.3 }}
                    >
                      <li className="text-[15px] font-roboto font-medium">
                        High-sodium foods: Avoid or limit high-sodium foods such
                        as processed meats, canned soups, fast food, chips, and
                        salted snacks.
                      </li>
                      <li className="text-[15px] font-roboto font-medium">
                        High-potassium foods: Limit or avoid high-potassium
                        foods such as bananas, oranges, potatoes, tomatoes,
                        avocados, and certain legumes.
                      </li>
                      <li className="text-[15px] font-roboto font-medium">
                        High-phosphorus foods: Limit foods high in phosphorus,
                        including dairy products, nuts, seeds, whole grains, and
                        processed foods with phosphate additives.
                      </li>
                      <li className="text-[15px] font-roboto font-medium">
                        Foods high in protein: Limit consumption of red meat,
                        poultry, fish, and dairy products.
                      </li>
                      <li className="text-[15px] font-roboto font-medium">
                        Fluid restrictions: In advanced stages of kidney
                        disease, fluid intake may need to be limited to prevent
                        fluid overload and swelling.
                      </li>
                      <li className="text-[15px] font-roboto font-medium">
                        Carbonated beverages and sugary drinks
                      </li>
                      <li className="text-[15px] font-roboto font-medium">
                        Alcohol
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {/* genaral Advice */}
              <div>
                <p className="text-[34px] font-mono font-semibold underline mt-[30px]">
                  General Advice
                </p>
                <ol
                  className="list-decimal pl-[40px] mb-[50px]"
                  style={{ lineHeight: 1.3 }}
                >
                  {weight > 80 && (
                    <li className="text-[17px] font-roboto font-normal">
                      Try to maintain healthy body weight, consult a healthcare
                      professional, adopt a balanced and nutritious diet plan,
                      engage in regular physical activities.
                    </li>
                  )}
                  {ckd === "Yes" && (
                    <li className="text-[18px] font-roboto font-normal">
                      When considering your family background, it is important
                      to take proactive steps to maintain your kidney health.
                    </li>
                  )}
                  {waterIntake < 2.7 && gender === "female" && (
                    <li className="text-[18px] font-roboto font-normal">
                      The recommended daily water intake is 2.7 liters.
                    </li>
                  )}
                  {waterIntake < 3.7 && gender === "male" && (
                    <li className="text-[18px] font-roboto font-normal">
                      The recommended daily water intake is 3.7 liters.
                    </li>
                  )}
                  {(bloodPressure === "high" || diabetes === "high") && (
                    <li className="text-[18px] font-roboto font-normal">
                      Consult a healthcare professional (Blood
                      pressure/Diabetes), reduce stress, maintain a healthy
                      weight, follow a healthy diet, regular check-ups, take
                      prescribed medication as directed.
                    </li>
                  )}
                  {(longtermDisease === "yes" || antiBiotics === "high") && (
                    <li className="text-[18px] font-roboto font-normal">
                      Limit sodium intake, monitor and control your blood
                      pressure and blood sugar, maintain a healthy lifestyle,
                      avoid nephrotoxic substances, stay hydrated, do blood test
                      every three months (Serum Creatinine, Blood Urea Nitrogen
                      (BUN), Estimated Glomerular Filtration Rate (eGFR)).
                    </li>
                  )}
                  {alcohol === "yes" && (
                    <li className="text-[18px] font-roboto font-normal">
                      Quit the alcohol at all.
                    </li>
                  )}
                  {tobacco === "yes" && (
                    <li className="text-[18px] font-roboto font-normal">
                      Quit smoking at all.
                    </li>
                  )}
                  {(weaterResourse === "tank" ||
                    weaterResourse === "well water" ||
                    weaterResourse === "river") && (
                    <li className="text-[18px] font-roboto font-normal">
                      When drinking water, filter it or use well-heated and
                      filtered water.
                    </li>
                  )}
                  {fertilizer === "high" && (
                    <li className="text-[18px] font-roboto font-normal">
                      Follow safety practices when exposure to inorganic
                      fertilizers, pesticides, and weedicides.
                    </li>
                  )}
                </ol>
              </div>
            </div>
          </PDFExport>
        </div>
      </div>
    </div>
  );
}

export default Result;

// "Blood tests:
// 		Serum Creatinine
// 		Blood Urea Nitrogen (BUN)
// 		Estimated Glomerular Filtration Rate (eGFR)
// 		Electrolyte Levels
// 	Urine tests:
// 		Urinalysis
// 		Urine Albumin-to-Creatinine Ratio (ACR)
// 	Imaging tests:
// 		Ultrasound
// 		CT Scan
// 	Biopsy:
// 		Kidney Biopsy
// consult with the following healthcare professionals:
// 	Primary Care Physician (PCP): Your primary care physician serves as the first point of contact for your healthcare needs.
// 	Nephrologist: A nephrologist is a doctor who specializes in diagnosing and treating kidney diseases.
// 	Registered Dietitian: A registered dietitian who specializes in kidney disease can provide valuable guidance on managing your diet to support kidney health.
// 	Urologist: Urologists specialize in the urinary system, including the kidneys.

// Inappropriate food and drink:
// 	High-sodium foods: Avoid or limit high-sodium foods such as processed meats, canned soups, fast food, chips, and salted snacks.
// 	High-potassium foods: Limit or avoid high-potassium foods such as bananas, oranges, potatoes, tomatoes, avocados, and certain legumes.
// 	High-phosphorus foods:  Limit foods high in phosphorus, including dairy products, nuts, seeds, whole grains, and processed foods with phosphate additives.
// 	Foods high in protein: Limit consumption of red meat, poultry, fish, and dairy products.
// 	Fluid restrictions: In advanced stages of kidney disease, fluid intake may need to be limited to prevent fluid overload and swelling.
// 	Carbonated beverages and sugary drinks
// 	Alcohol

// "
