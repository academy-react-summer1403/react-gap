import React from "react";
import HolderConnect from "../../component/HolderConnect/HolderConnecting";
import FormConnect from "../../component/HolderConnect/FormConnect";
import Map from "../../component/HolderConnect/ConnectMap"

const index = () => {
  return (
    <div>
      <HolderConnect />
       <FormConnect />
      <Map />
    </div>
  );
};

export default index;
