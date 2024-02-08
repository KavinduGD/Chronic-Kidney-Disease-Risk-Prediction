import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function LifestyleInfo({
  waterIntake,
  setWaterIntake,
  weaterResourse,
  setWaterResourse,
  fertilizer,
  setFertilizer,
  alcohol,
  setAlcohol,
  tobacco,
  setTobacco,
  artificialBeverage,
  setArtificialBeverage,
  setPage,
}) {
  return (
    <div className="">
      <div className="bg-white pt-[14px] pb-[12px] pl-[20px] font-roboto border-[1px] border-[#DADCE0]  border-t-[10px] border-t-red-500 rounded-md ">
        <p className="text-[36px] text-[#202124]">Lifestyle Information</p>
        <p className="text-[#202132] text-[16px] mt-[3px]">
          Please fill your life style information below and use precise details
          when you fill the form.
        </p>
      </div>
      <div className="flex flex-col mt-[15px] font-roboto gap-[10px]">
        {/* water intakee */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[25px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Average Daily Intake Of Water</p>
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
              onChange={(e) => setWaterIntake(e.target.value)}
              value={waterIntake === 0 ? "" : waterIntake}
            />
          </div>
        </div>
        {/* water resourse */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Main Water Resource</p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setWaterResourse(e.target.value)}
              value={weaterResourse}
            >
              <FormControlLabel
                value="well water"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Well Water"
              />
              <FormControlLabel
                value="tap water"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Tap Water"
              />
              <FormControlLabel
                value="river"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="River"
              />
              <FormControlLabel
                value="tank"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Tank"
              />
            </RadioGroup>
          </div>
        </div>

        {/* fertilizer */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">
            Exposure To Inoganic Fertilizers, Pesticides And Weedicides
          </p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setFertilizer(e.target.value)}
              value={fertilizer}
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
                label="No"
              />
            </RadioGroup>
          </div>
        </div>

        {/* alcohol */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Alcohol Consumption</p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setAlcohol(e.target.value)}
              value={alcohol}
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
                label="No"
              />
            </RadioGroup>
          </div>
        </div>

        {/* tobacco */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Tobacco Consumption</p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setTobacco(e.target.value)}
              value={tobacco}
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
                label="No"
              />
            </RadioGroup>
          </div>
        </div>

        {/* baverage */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Artificial Beverage Consumption</p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setArtificialBeverage(e.target.value)}
              value={artificialBeverage}
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

        {/* Button */}
        <div className="mb-[30px] flex gap-[20px]">
          <button
            className="py-[7px] px-[15px] bg-red-600 text-white rounded-md font-opensans font-semibold"
            onClick={() => {
              if (true) {
                console.log("hit");
                setPage(2);
              }
            }}
          >
            Previous
          </button>
          <button
            className="py-[7px] px-[25px] bg-red-600 text-white rounded-md font-opensans font-semibold"
            onClick={() => {
              if (true) {
                console.log("hit");
                setPage(4);
              }
            }}
          >
            Result
          </button>
        </div>
      </div>
    </div>
  );
}

export default LifestyleInfo;
