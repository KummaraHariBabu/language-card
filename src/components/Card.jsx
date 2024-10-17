import React from "react";
import Language from "./Language";
import data from "../data/data";
const Card = () => {
  return (
    <div className="cardWrapper">
      {data.map((item,index) => (
        <Language {...item} key={index}/>
      ))}
    </div>
  );
};

export default Card;
