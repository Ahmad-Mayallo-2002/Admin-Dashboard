import { Box, Button, Flex, Heading, Separator, Text } from "@chakra-ui/react";
import React from "react";
import { MdPictureAsPdf } from "react-icons/md";

export default function Invoices() {
  return (
    <Box as="section" className="box invoices">
      <Flex
        className="center-y"
        justifyContent="space-between"
        mb={4}
        flexDir={{ base: "column", md: "row" }}
      >
        <Heading color="var(--heading-color)" fontWeight={700}>
          Invoices
        </Heading>
        <Button variant="outline" colorPalette="blue">
          View All
        </Button>
      </Flex>
      {[1, 2, 3, 4, 5].map((value) => (
        <React.Fragment key={value}>
          <Flex className="space-between">
            <div>
              <Heading color="var(--heading-color)">
                {new Date().toLocaleDateString()}
              </Heading>
              <Text color="gray.400">#MS-412314</Text>
            </div>
            <Flex gap={4}>
              <Text color="gray.400">$180</Text>
              <Text
                className="center-y"
                gap={1}
                color="var(--heading-color)"
                fontWeight={700}
                fontSize={18}
              >
                <MdPictureAsPdf />
                PDF
              </Text>
            </Flex>
          </Flex>
          {value !== 5 && <Separator my={2} />}
        </React.Fragment>
      ))}
    </Box>
  );
}
