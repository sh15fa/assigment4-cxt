import React, { useContext } from "react";
import { getImageUrl } from "./Utils";
import { MyContext } from "./MyContext";
const PlaceImage = () => {
  const cntx=useContext(MyContext);
  return (
    <img
      src={getImageUrl(cntx.place)}
      alt={cntx.place.name}
      width={cntx.imgSize}
      height={cntx.imgSize}
    />
  );
};

export default PlaceImage;
