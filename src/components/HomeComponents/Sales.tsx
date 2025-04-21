import { sales } from "@/assets/data/sales";
import { Box, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";

export default function Sales() {
  return (
    <SimpleGrid
      mt={8}
      mb={4}
      columns={{ base: 1, md: 2, lg: 4 }}
      gapX={4}
      gapY={8}
    >
      {sales.map((sale) => (
        <Box
          key={sale.title}
          as="section"
          className="sales"
          shadow="lg"
          p={3}
          pos="relative"
          rounded={8}
        >
          <Box className="head">
            <Icon
              color="#fff"
              rounded={8}
              bgColor={`var(${sale.color})`}
              w={"64px"}
              h={"64px"}
              p={3}
              pos="absolute"
              top={"-1rem"}
            >
              <sale.icon />
            </Icon>
            <div style={{ textAlign: "right" }}>
              <Text color="gray.400">{sale.title}</Text>
              <Heading
                color="var(--heading-color)"
                fontSize={24}
                fontWeight={700}
              >
                {sale.value}
              </Heading>
            </div>
          </Box>
          <hr />
          <Box className="body">
            <Text color="gray.400">
              <Text as="b" color="var(--green)">
                {sale.percentage}
              </Text>
              &nbsp; than last week
            </Text>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
