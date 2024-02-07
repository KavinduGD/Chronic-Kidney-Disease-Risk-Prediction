import React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function PersonalInfo({
  setAge,
  setGender,
  setDistrict,
  age,
  gender,
  district,
  setPage,
}) {
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
        {/* age */}
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
              type="number"
              onChange={(e) => setAge(e.target.value)}
              value={age === 0 ? "" : age}
            />
          </div>
        </div>
        {/* Gender */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[15px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[16px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">Gender</p>
          <div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
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
        {/* District */}
        <div className="bg-white text-[#202124] pt-[20px] pb-[30px] pl-[20px] pr-[20px] rounded-lg flex flex-col  gap-[20px]  border-[1px] border-[#DADCE0]">
          <p className="font-medium">District </p>
          <div>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              //   value={age}
              onChange={(e) => setDistrict(e.target.value)}
              variant="standard"
              sx={{ width: "100%" }}
              color="warning"
              value={district === "" ? "none" : district}
            >
              <MenuItem value="none">Select a District</MenuItem>
              <MenuItem value="colombo">Colombo</MenuItem>
              <MenuItem value="gampaha">Gampaha</MenuItem>
              <MenuItem value="kalutara">Kalutara</MenuItem>
              <MenuItem value="kandy">Kandy</MenuItem>
              <MenuItem value="matale">Matale</MenuItem>
              <MenuItem value="nuwara eliya">Nuwara Eliya</MenuItem>
              <MenuItem value="galle">Galle</MenuItem>
              <MenuItem value="matara">Matara</MenuItem>
              <MenuItem value="hambantota">Hambantota</MenuItem>
              <MenuItem value="jaffna">Jaffna</MenuItem>
              <MenuItem value="kilinochchi">Kilinochchi</MenuItem>
              <MenuItem value="mannar">Mannar</MenuItem>
              <MenuItem value="vavuniya">Vavuniya</MenuItem>
              <MenuItem value="mullaitivu">Mullaitivu</MenuItem>
              <MenuItem value="batticaloa">Batticaloa</MenuItem>
              <MenuItem value="ampara">Ampara</MenuItem>
              <MenuItem value="trincomalee">Trincomalee</MenuItem>
              <MenuItem value="kurunegala">Kurunegala</MenuItem>
              <MenuItem value="puttalam">Puttalam</MenuItem>
              <MenuItem value="anuradhapura">Anuradhapura</MenuItem>
              <MenuItem value="polonnaruwa">Polonnaruwa</MenuItem>
              <MenuItem value="badulla">Badulla</MenuItem>
              <MenuItem value="moneragala">Moneragala</MenuItem>
              <MenuItem value="ratnapura">Ratnapura</MenuItem>
              <MenuItem value="kegalle">Kegalle</MenuItem>
            </Select>
          </div>
        </div>

        <div className="mb-[30px] ">
          <button
            className="py-[7px] px-[30px] bg-red-600 text-white rounded-md font-opensans font-semibold"
            onClick={() => {
              if (age !== 0 && gender !== "" && district !== "") {
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

export default PersonalInfo;
