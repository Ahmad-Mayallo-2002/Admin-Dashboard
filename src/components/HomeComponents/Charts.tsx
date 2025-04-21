import { SimpleGrid } from "@chakra-ui/react";
import MyBarChart from "../Charts/MyBarChart";
import SalesCard from "../MyComponents/SalesCard";
import MyLineChart from "../Charts/MyLineChart";
import MyAreaChart from "../Charts/MyAreaChart";

export default function Charts() {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={3}
        as="section"
        className="charts"
      >
        <SalesCard
          chart={<MyBarChart />}
          title="Website Views"
          description="Last Campaign Performance"
        />{" "}
        <SalesCard
          chart={<MyLineChart />}
          title="Daily Sales"
          description="(+15%) increase in today sales."
        />
        <SalesCard
          chart={<MyAreaChart />}
          title="Daily Sales"
          description="(+15%) increase in today sales."
        />
      </SimpleGrid>
    </>
  );
}
