// @ts-nocheck

'use client';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap = () => (
  <ComposableMap>
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => {
          const countryName = geo.properties.name; 

          return (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={countryName === "Indonesia" ? "#FF5722" : "#D6D6DA"} 
              style={{
                default: { outline: "none" },
                hover: { fill: "#F53", outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          );
        })
      }
    </Geographies>
  </ComposableMap>
);

export default WorldMap;
