import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const style = {
  button: {
    margin: "2vh",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
};

const AvailableDates = ["11:00", "12:00", "14:00", "16:00", "18:00"];

const DayPicker = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      res(AvailableDates);
    });

    promesa.then((res) => setDates(res));
  }, []);
  console.log(dates);
  return (
    <div style={style.container}>
      {dates.map((d) => {
        return (
          <Button variant="outlined" style={style.button}>
            {d}
          </Button>
        );
      })}
    </div>
  );
};

export default DayPicker;
