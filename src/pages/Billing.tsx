import BillingInfo from "@/components/BillingComponents/BillingInfo";
import Invoices from "@/components/BillingComponents/Invoices";
import Payment from "@/components/BillingComponents/Payment";
import Transactions from "@/components/BillingComponents/Transactions";
import { Grid } from "@chakra-ui/react";

export default function Billing() {
  return (
    <>
      <Grid gridTemplateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={4}>
        <Payment />
        <Invoices />
      </Grid>
      <Grid gap={4} mt={4} gridTemplateColumns={{ base: "1fr", lg: "2fr 1fr" }}>
        <BillingInfo />
        <Transactions />
      </Grid>
    </>
  );
}
