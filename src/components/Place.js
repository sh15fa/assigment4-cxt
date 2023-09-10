import React, { useContext } from "react";
import PlaceImage from "./PlaceImage";
import { MyContext } from "./MyContext";

const Place = () => {
  const cntx=useContext(MyContext);
  return (
    <>
      <PlaceImage  />
      <p>
        <b>{cntx.place.name}</b>
        {": " + cntx.place.description}
      </p>
    </>
  );
};

export default Place;
