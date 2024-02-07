import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function HealthInfo({
  weight,
  setWeight,
  bloodPressure,
  setBloodPressure,
  diabetes,
  setDiabetes,
  longtermDisease,
  setLongtermDisease,
  antiBiotics,
  setAntiBiotics,
  ckd,
  setCkd,
}) {
  return (
    <div className="">
      <div className="bg-white pt-[14px] pb-[12px] pl-[20px] font-roboto border-[1px] border-[#DADCE0]  border-t-[10px] border-t-red-500 rounded-md ">
        <p className="text-[36px] text-[#202124]">Health Information</p>
        <p className="text-[#202132] text-[16px] mt-[3px]">
          Please fill your personal information below and use precise details
          when you fill the form.
        </p>
      </div>
      <div className="flex flex-col mt-[15px] font-roboto gap-[10px]">
        {/* Weight */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[25px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Weight</p>
          <div>
            <TextField
              id="filled-basic"
              variant="standard"
              placeholder="Your Answer"
              style={{
                width: "100%",
              }}
              color="warning"
              type="number"
              onChange={(e) => setWeight(e.target.value)}
              value={weight === 0 ? "" : weight}
            />
          </div>
        </div>

        {/* Blood presure */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Do You Suffer From Blood Pressure?</p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setBloodPressure(e.target.value)}
              value={bloodPressure}
            >
              <FormControlLabel
                value="high"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="High"
              />
              <FormControlLabel
                value="low"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Low"
              />
            </RadioGroup>
          </div>
        </div>

        {/* Diabetes */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Do You Suffer From Diabetes?</p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setDiabetes(e.target.value)}
              value={diabetes}
            >
              <FormControlLabel
                value="high"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="High"
              />
              <FormControlLabel
                value="low"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Low"
              />
            </RadioGroup>
          </div>
        </div>

        {/* Long term disease */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">
            Do You Take Long-Tern Medication For Any Disease?
          </p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setLongtermDisease(e.target.value)}
              value={longtermDisease}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="no"
              />
            </RadioGroup>
          </div>
        </div>

        {/* antibiotics */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">
            Do You Use Antibiotics For Any Condition In The Long Term?
          </p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setAntiBiotics(e.target.value)}
              value={antiBiotics}
            >
              <FormControlLabel
                value="high"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="High"
              />
              <FormControlLabel
                value="moderate"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Moderate"
              />
              <FormControlLabel
                value="low"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Low"
              />
            </RadioGroup>
          </div>
        </div>

        {/* ckd */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Do You Have A Family History of CKD?</p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setCkd(e.target.value)}
              value={ckd}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="no"
              />
            </RadioGroup>
          </div>
        </div>
        <div className="mb-[30px] ">
          <button
            className="py-[7px] px-[30px] bg-red-600 text-white rounded-md font-opensans font-semibold"
            onClick={() => {
              if (true) {
                console.log("hit");
                setPage(2);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HealthInfo;
