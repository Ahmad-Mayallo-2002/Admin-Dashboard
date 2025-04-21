import { Box, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaClock } from "react-icons/fa";

type Data = {
  chart: ReactNode;
  title: string;
  description: string;
};

export default function SalesCard({ chart, title, description }: Data) {
  return (
    <>
      <Box
        className="sales-card"
        pos="relative"
        bgColor="#fff"
        h="fit-content"
        rounded={12}
        p={3}
        pb={6}
        shadow="lg"
      >
        {chart}
        <Heading mt="-1rem" color="var(--heading-color)">
          {title}
        </Heading>
        <Text color="gray.400">{description}</Text>
        <hr />
        <Text className="center-y" color="gray.400" gap={2}>
          <FaClock />
          Updated 4 min ago
        </Text>
      </Box>
    </>
  );
}
