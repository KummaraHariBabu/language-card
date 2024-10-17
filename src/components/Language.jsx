import React, { useState } from "react";

const Language = ({ name, img, options }) => {
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <div className="card" onClick={() => setShow(!show)}>
      {show && (
        <div >
          <img src={img} alt="name" className="cardImg" />
          <h5>{name}</h5>
        </div>
      )}
      {!show && (
        <ul>
          {options.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Language;
