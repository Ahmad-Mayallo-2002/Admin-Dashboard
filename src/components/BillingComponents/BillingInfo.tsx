import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function BillingInfo() {
  return (
    <>
      <Box as="section" className="billing-info box">
        <Heading
          mb={4}
          fontSize={18}
          color="var(--heading-color)"
          fontWeight={700}
        >
          Billing Information
        </Heading>
        {[1, 2, 3].map((value) => (
          <Box
            key={value}
            mb={value !== 3 ? 4 : 0}
            bgColor="#f2f2f2"
            p={5}
            rounded={8}
          >
            <Flex
              mb={5}
              className="space-between"
              flexDir={{ base: "column", md: "row" }}
              gapY={4}
            >
              <Heading color="var(--heading-color)" fontWeight={700}>
                Oliver Liam
              </Heading>
              <ButtonGroup attached>
                <Button colorPalette="red" variant="outline">
                  Delete
                </Button>
                <Button colorPalette="blue" variant="outline">
                  Edit
                </Button>
              </ButtonGroup>
            </Flex>
            <Text color="gray.400">
              Company Name:{" "}
              <Text as="strong" color="var(--heading-color)">
                Amazon
              </Text>
            </Text>
            <Text my={2} color="gray.400">
              Email Address:{" "}
              <Text as="strong" color="var(--heading-color)">
                Amazon@amazon.com
              </Text>
            </Text>
            <Text color="gray.400">
              VAT Number:{" "}
              <Text as="strong" color="var(--heading-color)">
                RGB123456
              </Text>
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
}
