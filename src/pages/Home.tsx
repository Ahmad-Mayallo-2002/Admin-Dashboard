import Charts from "@/components/HomeComponents/Charts";
import ProjectsAndOrders from "@/components/HomeComponents/ProjectsAndOrders";
import Sales from "@/components/HomeComponents/Sales";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="section" id="home-content">
      <Sales />
      <Charts />
      <ProjectsAndOrders />
    </Box>
  );
}
