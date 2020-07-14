import React, { useState } from "react";
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
function MapContainer({ data }) {
  const [content, setContent] = useState("");
  return (
    <div>
      <MapChart setTooltipContent={setContent} data={data} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
export default MapContainer;
