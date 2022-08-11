import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";



export default function Chart({data}) {
  return (
    <ResponsiveContainer width='100%' height={200}>
    <AreaChart
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
      width={900}
      height={400}
    >
      <XAxis dataKey="name" />
      <YAxis hide = {true} />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="sales"
        stroke="#1C3879"
        fill="#607EAA"
      />
    </AreaChart>
</ResponsiveContainer>
  );
}

  
