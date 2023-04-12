import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Line,
} from "recharts";

const Charts = () => {
  const data = [
    {
      subject: "Assignment 1",
      A: 48,
      fullMark: 60,
    },
    {
        subject: "Assignment 2",
        A: 54,
        fullMark: 60,
      },
      {
        subject: "Assignment 3",
        A: 58,
        fullMark: 60,
      },
      {
        subject: "Assignment 4",
        A: 60,
        fullMark: 60,
      },
      {
        subject: "Assignment 5",
        A: 52,
        fullMark: 60,
      },
      {
        subject: "Assignment 6",
        A: 58,
        fullMark: 60,
      },
      {
        subject: "Assignment 7",
        A: 58,
        fullMark: 60,
      },
  ];
    return (<div className="mx-auto flex items-center justify-center">
      
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={1000}
      height={1000}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  </div>
  );
};

export default Charts;
