import React from "react";
import { Paper } from "@mui/material";

const style = {
  img: {
    width: "50vh",
  },
  div: {
    display: "flex",
    margin: "1vh",
    padding: "3vh, 3vh, 0vh, 0vh",
  },
  text: {
    marginLeft: "1vh",
  },
  paper: {
    margin: "3vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const CustomCard = () => {
  return (
    <>
      <Paper elevation={12} style={style.paper}>
        <h1>El incunable perdido</h1>
        <div style={style.div}>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1meaShdKGE2NdkNxNx0a3MN053eEUYQpKA&usqp=CAU"
            }
            style={style.img}
          />
          <p style={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id,
            excepturi quas corporis a numquam fugiat voluptates vel, in officia
            porro. Doloribus quos blanditiis nisi quam esse quibusdam eum.
            Deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis cumque aut quod magni placeat quaerat repudiandae
            adipisci maiores quam dolorum voluptatum dolore doloremque odit
            libero praesentium perferendis temporibus, earum dolorem! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Nisi id,
            excepturi quas corporis a numquam fugiat voluptates vel, in officia
            porro. Doloribus quos blanditiis nisi quam esse quibusdam eum.
            Deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis cumque aut quod magni placeat quaerat repudiandae
            adipisci maiores quam dolorum voluptatum dolore doloremque odit
            libero praesentium perferendis temporibus, earum dolorem! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Nisi id,
            excepturi quas corporis a numquam fugiat voluptates vel, in officia
            porro. Doloribus quos blanditiis nisi quam esse quibusdam eum.
            Deleniti? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis cumque aut quod magni placeat quaerat repudiandae
            adipisci maiores quam dolorum voluptatum dolore doloremque odit
            libero praesentium perferendis temporibus, earum dolorem!
          </p>
        </div>
      </Paper>
    </>
  );
};

export default CustomCard;
