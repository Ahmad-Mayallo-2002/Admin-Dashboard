import { Grid } from "@chakra-ui/react";
import Projects from "../MyComponents/Projects";
import Orders from "./Orders";

export default function ProjectsAndOrders() {
  return (
    <Grid gridTemplateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={3} my={4}>
      <Projects />
      <Orders />
    </Grid>
  );
}
