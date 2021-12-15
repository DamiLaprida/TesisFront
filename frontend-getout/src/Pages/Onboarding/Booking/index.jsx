import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import DayPicker from "../../../components/DayPicker";
import CustomCard from "../../../components/CustomCard";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const Booking = () => {
  const [value, setValue] = useState(new Date());
  const timestamp = new Date();
  const maxDate = new Date(timestamp);
  maxDate.setDate(timestamp.getDate() + 30);

  return (
    <div style={style.container}>
      <CustomCard />
      <h2>Reservá</h2>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          minDate={timestamp}
          maxDate={maxDate}
          views={["day"]}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <DayPicker />
    </div>
  );
};

export default Booking;
