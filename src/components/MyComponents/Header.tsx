import { Box, Button, Heading, Input } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      bgColor="#eee"
      gapY={4}
      className="space-between"
      rounded={8}
      mb={4}
      as="header"
      id="header"
      flexDir={{ base: "column", lg: "row" }}
      p={3}
    >
      <Heading>Mayallo Dashboard</Heading>
      <Box as="form" className="center-y">
        <Input roundedEnd={0} placeholder="Search Here..." bgColor="#fff" />
        <Button bgColor="var(--blue)" roundedStart={0}>
          Search
        </Button>
      </Box>
    </Box>
  );
}
