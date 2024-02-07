import React, { useEffect, useState } from "react";
import axios from "axios";

function Result() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const handleResult = async () => {
      const response = await axios.post(
        "https://ckd-risk-prediction-backend-python.azurewebsites.net/user",
        {
          Age: [54],
          Gender: ["Male"],
          Distict: ["Anuradapura"],
          "Local Autority": ["Padaviya"],
          Weight: [57],
          "Family History of CKD": ["yes"],
          "Water intake": [3],
          "Blood Pressure": ["LOW"],
          Diabetes_no: ["yes"],
          "Medications for diabetes/blood pressure": ["Yes"],
          "Alchol consumption_yes": ["Yes"],
          "Tobbaco Consumption": ["Yes"],
          "Water resource": ["well water"],
          "Usage of Artificial beverages": ["Low"],
          "Antibiotic Consumption": ["high"],
          Fertilizer: ["No"],
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

  return <div>Result-{result}</div>;
}

export default Result;
