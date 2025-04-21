import { Chart, useChart } from "@chakra-ui/charts";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function MyPieChart() {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 450, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 420, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 460, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "var(--red)" },
      { name: "mac", color: "var(--green)" },
      { name: "linux", color: "var(--blue)" },
    ],
  });

  return (
    <Chart.Root
      bgColor={chart.color("var(--black)")}
      p={3}
      pl={0}
      rounded={12}
      mx="auto"
      chart={chart}
      className="chart"
    >
      <AreaChart data={chart.data} margin={{ left: -12 }}>
        <CartesianGrid stroke={chart.color("white")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          stroke={chart.color("white")}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />{" "}
        <YAxis stroke={chart.color("border")} />
        <Tooltip
          cursor={false}
          animationDuration={300}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={true}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  );
}
