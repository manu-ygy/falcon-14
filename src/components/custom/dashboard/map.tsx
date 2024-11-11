'use client';
// components/WorldMap.js
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// URL atau path ke file topojson
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap = () => (
  <ComposableMap>
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => {
          const countryName = geo.properties.name; // Ambil nama negara dari properti geografi

          return (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={countryName === "Indonesia" ? "#FF5722" : "#D6D6DA"} // Warna khusus untuk Indonesia
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
