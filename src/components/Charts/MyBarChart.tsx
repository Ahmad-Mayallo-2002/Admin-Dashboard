import { Chart, useChart } from "@chakra-ui/charts";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function MyBarChart() {
  const chart = useChart({
    data: [
      { allocation: 60, type: "Stock" },
      { allocation: 45, type: "Crypto" },
      { allocation: 40, type: "ETF" },
      { allocation: 70, type: "Cash" },
    ],
    series: [{ name: "allocation", color: "#fff" }],
  });

  return (
    <Chart.Root
      chart={chart}
      bgColor="var(--blue)"
      p={3}
      pl={0}
      rounded={12}
      className="chart"
    >
      <BarChart margin={{ left: -12 }} data={chart.data}>
        {/* Grid */}
        <CartesianGrid stroke={chart.color("white")} vertical={true} />

        {/* X Axis */}
        <XAxis
          dataKey={chart.key("type")}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#fff", fontSize: 12 }} // Label color
          stroke="#fff" // Optional: if axis line is visible
        />

        {/* Y Axis */}
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
          tick={{ fill: "#fff", fontSize: 12 }} // Label color
          stroke="#fff" // Optional: if axis line is visible
        />
        <Tooltip
          cursor={{ fill: chart.color("transparent") }}
          animationDuration={300}
          content={<Chart.Tooltip />}
        />

        {/* Bars */}
        {chart.series.map((item) => (
          <Bar
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            barSize={15}
            radius={[15, 15, 0, 0]} // Top rounded
            isAnimationActive={true}
          >
            {chart.data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={chart.color(item.color)} />
            ))}
          </Bar>
        ))}
      </BarChart>
    </Chart.Root>
  );
}
