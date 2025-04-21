import { pricingPlans } from "@/assets/data/pricing";
import {
  Badge,
  Button,
  GridItem,
  Heading,
  Icon,
  List,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaMinus } from "react-icons/fa";

export default function YearPricing() {
  return (
    <SimpleGrid mt={8} columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
      {pricingPlans.map((pricing) => (
        <GridItem
          className="pricing"
          px={8}
          py={10}
          rounded={12}
          pos="relative"
          borderWidth={1}
        >
          <Badge
            className="badge"
            pos="absolute"
            top={0}
            transform="translate(-50%,-50%)"
            left="50%"
            size="md"
          >
            {pricing.name}
          </Badge>
          <Heading fontWeight={700} fontSize={42} mb={8}>
            <Text as="sup">$</Text> {pricing.price * 5}
            <Text as="sub">/mo</Text>
          </Heading>
          <List.Root mb={4} textAlign="start" color="gray.500">
            {pricing.features.map((feature) => (
              <List.Item mb={4} key={feature.type}>
                <Icon mr={2}>
                  {feature.available ? <FaCheck /> : <FaMinus />}
                </Icon>{" "}
                {feature.type} {feature?.value}
              </List.Item>
            ))}
          </List.Root>
          <Button w="full" bgColor="var(--black)">
            Subscribe
          </Button>
        </GridItem>
      ))}
    </SimpleGrid>
  );
}
