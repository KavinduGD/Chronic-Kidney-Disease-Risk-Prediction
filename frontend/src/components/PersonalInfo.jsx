import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
const normalInputStyle =
  "py-[16px] pl-3 focus:outline-none rounded-md border-[1px] border-gray-300 text-sm text-[#000] font-normal";
const normalLabelStyle =
  "font-roboto text-[16px] font-semibold leading-[92%] text-[#383838]";

function PersonalInfo() {
  const [seatingCapacity, setSeatingCapacity] = React.useState(0);

  return (
    <div className="">
      <div className="bg-white pt-[14px] pb-[12px] pl-[20px] font-roboto border-[1px] border-[#DADCE0]  border-t-[10px] border-t-red-500 rounded-md ">
        <p className="text-[36px] text-[#202124]">Personal Information</p>
        <p className="text-[#202132] text-[16px] mt-[3px]">
          Please fill your personal information below and use precise details
          when you fill the form.
        </p>
      </div>
      <div className="flex flex-col mt-[15px] font-roboto gap-[10px]">
        <div className="bg-white text-[#202124] pt-[20px] pb-[25px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Age</p>
          <div>
            <TextField
              id="filled-basic"
              variant="standard"
              placeholder="Your Answer"
              style={{
                width: "100%",
              }}
              color="warning"
            />
          </div>
        </div>
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Gender</p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    sx={{
                      //   color: "#ff79b0",
                      "&.Mui-checked": { color: "#ff4081" },
                    }}
                  />
                }
                label="Male"
              />
            </RadioGroup>
          </div>
        </div>
        <div className="bg-white text-[#202124] pt-[20px] pb-[25px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">District </p>
          <div>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              //   value={age}
              //   onChange={handleChange}
              sx={{ width: "100%" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="colombo">Colombo</MenuItem>
              <MenuItem value="gampaha">Gampaha</MenuItem>
              <MenuItem value="kaluthara">Kaluthara</MenuItem>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
