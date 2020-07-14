import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent, data }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    let c = data.find((e) => {
                      if (
                        (NAME === "United States of America" &&
                          e.country === "USA") ||
                        (NAME === "United Kingdom" && e.country === "UK")
                      ) {
                        return true;
                      }
                      return e.country.toLowerCase() === NAME.toLowerCase();
                    });
                    if (c) {
                      setTooltipContent(
                        `${c.country} — Total Cases: ${c.cases}\n Total Deaths:${c.deaths} `
                      );
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
