import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Separator,
  SimpleGrid,
  Button,
  Grid,
} from "@chakra-ui/react";
import { FaMoneyBill, FaPaypal, FaPen, FaWifi } from "react-icons/fa";
import master_card from "../../assets/images/logos/mastercard.png";
import pattern_tree from "../../assets/images/illustrations/pattern-tree.svg";
import visa from "../../assets/images/logos/visa.png";

export default function Payment() {
  return (
    <>
      <div>
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "1fr 0.5fr 0.5fr" }}
          gap={4}
        >
          <Box
            as="section"
            className="credit-card"
            p={3}
            bgColor="var(--black)"
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            rounded="lg"
            pos="relative"
            _before={{
              pos: "absolute",
              w: "100%",
              h: "100%",
              bgImage: `url(${pattern_tree})`,
              bgSize: "cover",
              content: "''",
              top: 0,
              left: 0,
              opacity: 0.3,
            }}
          >
            <Icon color="#fff" mb={4}>
              <FaWifi size={30} />
            </Icon>
            <Flex mb={4} gap={4} color="#fff" fontSize={24} fontWeight={700}>
              <span>1234</span>
              <span>5678</span>
              <span>9010</span>
            </Flex>
            <Flex gap={4} alignItems="center">
              <div>
                <Text color="gray.400">Card Holder</Text>
                <Heading color="#fff" fontSize={18}>
                  Ahmad Mayallo
                </Heading>
              </div>
              <div>
                <Text color="gray.400">Expires</Text>
                <Heading color="#fff" fontSize={18}>
                  11/22
                </Heading>
              </div>
              <div style={{ flexGrow: 1 }}>
                <Image ml="auto" src={master_card} alt="Master Card" w="50px" />
              </div>
            </Flex>
          </Box>
          <Box as="section" className="salary box" textAlign="center">
            <Icon bgColor="var(--blue)" mb={4} p={5} rounded="md">
              <FaMoneyBill size={90} color="#fff" />
            </Icon>
            <Heading color="var(--heading-color)" fontWeight={700}>
              Salary
            </Heading>
            <Text color="gray.400">Belong Interactive</Text>
            <Separator mx="auto" maxW="150px" my={4} />
            <Heading color="var(--heading-color)" fontWeight={700}>
              +$2500
            </Heading>
          </Box>
          <Box as="section" className="salary box" textAlign="center">
            <Icon bgColor="var(--blue)" mb={4} p={5} rounded="md">
              <FaPaypal size={90} color="#fff" />
            </Icon>
            <Heading color="var(--heading-color)" fontWeight={700}>
              paypal
            </Heading>
            <Text color="gray.400">Freelance Payment</Text>
            <Separator my={4} maxW="150px" mx="auto" />
            <Heading color="var(--heading-color)" fontWeight={700}>
              $455.00
            </Heading>
          </Box>
        </Grid>
        <Box as="section" mt={4} className="payment-method box">
          <Flex
            className="center-y payment-method-header"
            as="header"
            justifyContent="space-between"
            gapY={4}
            mb={4}
            flexDir={{ base: "column", md: "row" }}
          >
            <Heading
              fontWeight={700}
              fontSize={22}
              color="var(--heading-color)"
            >
              Payment Method
            </Heading>
            <Button
              _hover={{ shadow: "xl" }}
              w="fit-content"
              bgColor="var(--black)"
            >
              + add new card
            </Button>
          </Flex>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={4}>
            <Flex
              justifyContent="space-between"
              className="center-y"
              flexDir={{ base: "column", md: "row" }}
              borderWidth={1}
              gapY={4}
              rounded="lg"
              p={5}
            >
              <Image src={master_card} w="75px" alt="Master Card" />
              <Flex
                color="var(--heading-color)"
                fontWeight={700}
                fontSize={24}
                alignItems="center"
                gap={4}
              >
                <span>****</span>
                <span>****</span>
                <span>1234</span>
              </Flex>
              <Icon color="var(--heading-color)">
                <FaPen size={30} />
              </Icon>
            </Flex>{" "}
            <Flex
              justifyContent="space-between"
              className="center-y"
              flexDir={{ base: "column", md: "row" }}
              borderWidth={1}
              gapY={4}
              rounded="lg"
              p={5}
            >
              <Image src={visa} w="75px" alt="Master Card" />
              <Flex
                color="var(--heading-color)"
                fontWeight={700}
                fontSize={24}
                alignItems="center"
                gap={4}
              >
                <span>****</span>
                <span>****</span>
                <span>1234</span>
              </Flex>
              <Icon color="var(--heading-color)">
                <FaPen size={30} />
              </Icon>
            </Flex>
          </SimpleGrid>
        </Box>
      </div>
    </>
  );
}
