import CompaniesGrayImages from "@/components/PricingComponents/CompaniesGrayImages";
import FAQS from "@/components/PricingComponents/FAQS";
import MonthPricing from "@/components/PricingComponents/MonthPricing";
import YearPricing from "@/components/PricingComponents/YearPricing";
import { Box, Tabs, Text } from "@chakra-ui/react";

export default function Pricing() {
  return (
    <>
      <Box as="section" className="box pricing">
        <Tabs.Root
          defaultValue="month"
          textAlign="center"
          variant="enclosed"
          mb={16}
          colorPalette="blue"
        >
          <Tabs.List maxW="75%" rounded={13} w="full">
            <Tabs.Trigger flexGrow={1} justifyContent="center" value="month">
              Month
            </Tabs.Trigger>
            <Tabs.Trigger flexGrow={1} justifyContent="center" value="year">
              Year
            </Tabs.Trigger>
            <Tabs.Indicator rounded={12} />
          </Tabs.List>
          <Tabs.Content className="month-pricing" value="month">
            <MonthPricing />
          </Tabs.Content>
          <Tabs.Content className="year-pricing" value="year">
            <YearPricing />
          </Tabs.Content>
        </Tabs.Root>
        <Text
          color="gray.500"
          fontWeight={700}
          textAlign="center"
          fontSize={20}
        >
          More than 50+ brands trust Material
        </Text>
        <CompaniesGrayImages />
        <FAQS />
      </Box>
    </>
  );
}
