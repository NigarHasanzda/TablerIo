"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Country user data
const countryUsers: Record<string, number> = {
  USA: 12000,
  Brazil: 8500,
  UnitedKingdom: 7200,
  India: 15000,
  China: 18000,
  Turkey: 6000,
  Russia: 11000,
  Germany: 9500,
  France: 7000,
  Australia: 3000,
  SouthAfrica: 2500,
  Azerbaijan: 4000,
  Canada: 5000,
  Japan: 8000,
  Mexico: 4500,
};

const normalize = (name: string) =>
  name.replace(/\s/g, "").replace("&", "").replace(".", "");

// Color scale
const getCountryColor = (geo: GeographyType) => {
  const name = normalize(geo.properties.name);
  const users = countryUsers[name] || 0;

  if (users > 20000) return "#08306b";
  if (users > 15000) return "#08519c";
  if (users > 10000) return "#2171b5";
  if (users > 6000) return "#4292c6";
  if (users > 3000) return "#6baed6";
  return "#c6dbef";
};

// Traffic data for chart
const trafficData = [
  { name: "24 Jun", a: 5, b: 3, c: 2 },
  { name: "", a: 12, b: 5, c: 4 },
  { name: "", a: 8, b: 2, c: 3 },
  { name: "", a: 10, b: 4, c: 2 },
  { name: "", a: 11, b: 3, c: 1 },
  { name: "", a: 14, b: 6, c: 3 },
  { name: "Jul '20", a: 25, b: 10, c: 5 },
  { name: "", a: 15, b: 4, c: 2 },
  { name: "", a: 12, b: 3, c: 1 },
  { name: "08 Jul", a: 18, b: 7, c: 4 },
  { name: "", a: 10, b: 2, c: 1 },
  { name: "", a: 45, b: 15, c: 8 },
  { name: "", a: 60, b: 20, c: 10 },
  { name: "16 Jul", a: 55, b: 12, c: 5 },
  { name: "", a: 30, b: 8, c: 4 },
  { name: "", a: 65, b: 18, c: 7 },
  { name: "", a: 62, b: 14, c: 6 },
  { name: "24 Jul", a: 95, b: 25, c: 12 },
  { name: "", a: 10, b: 4, c: 2 },
];

type TooltipState = {
  show: boolean;
  name: string;
  users: number;
  x: number;
  y: number;
};

type GeographyType = {
  rsmKey: string;
  properties: { name: string };
};

export default function LocationTraffic() {
  const [tooltip, setTooltip] = useState<TooltipState>({
    show: false,
    name: "",
    users: 0,
    x: 0,
    y: 0,
  });

  return (
    <div className="bg-[#f8fafc] mt-[-25px] h-fit">
      <div className="w-[73%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white rounded-lg border border-[#e6e8e9] shadow-sm p-6">
          <h3 className="text-[16px] font-semibold text-[#1d273b] mb-8">
            Traffic summary
          </h3>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficData} margin={{ left: -20 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f3f5"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#626976", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#626976", fontSize: 12 }}
                />
                <RechartsTooltip cursor={{ fill: "#f8fafc" }} />
                <Bar dataKey="a" stackId="stack" fill="#066FD1" barSize={8} />
                <Bar dataKey="b" stackId="stack" fill="#4299e1" barSize={8} />
                <Bar
                  dataKey="c"
                  stackId="stack"
                  fill="#48bb78"
                  barSize={8}
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ================= LOCATION MAP ================= */}
        <div className="bg-white rounded-lg border border-[#e6e8e9] shadow-sm p-6 relative">
          <h3 className="text-[16px] font-semibold text-[#1d273b] mb-4">
            Locations
          </h3>

          <div className="w-full h-[300px] relative">
            <ComposableMap projection="geoMercator" className="w-full h-full">
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: GeographyType[] }) =>
                  geographies.map((geo) => {
                    const name = normalize(geo.properties.name);
                    const users = countryUsers[name] || 0;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo as any}
                        fill={getCountryColor(geo)}
                        stroke="#ffffff"
                        strokeWidth={0.4}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: "#084298",
                            outline: "none",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          },
                          pressed: { outline: "none" },
                        }}
                        onMouseMove={(e: React.MouseEvent<SVGPathElement>) => {
                          setTooltip({
                            show: true,
                            name: geo.properties.name,
                            users,
                            x: e.clientX,
                            y: e.clientY,
                          });
                        }}
                        onMouseLeave={() =>
                          setTooltip({
                            show: false,
                            name: "",
                            users: 0,
                            x: 0,
                            y: 0,
                          })
                        }
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>

            {/* CUSTOM TOOLTIP */}
            {tooltip.show && typeof window !== "undefined" && (
              <div
                className="fixed z-50 bg-white border shadow-lg px-3 py-2 rounded text-[12px] pointer-events-none"
                style={{
                  top: tooltip.y + 12,
                  left: tooltip.x + 12,
                }}
              >
                <p className="font-semibold text-[#1d273b]">
                  {tooltip.name}
                </p>
                <p className="text-[#4b5563]">
                  {tooltip.users.toLocaleString()} users
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
