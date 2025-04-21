import { orders } from "@/assets/data/orders";
import { Box, Heading, Icon, Text, Timeline } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

export default function Orders() {
  const {
    Root,
    Item,
    Connector,
    Separator,
    Indicator,
    Content,
    Title,
    Description,
  } = Timeline;
  return (
    <>
      <Box as="section" className="box orders">
        <Box as="header" className="orders-header" mb={4}>
          <Heading color="var(--heading-color)" mb={2} fontWeight={700}>
            Orders overview
          </Heading>
          <Text color="gray.400" className="center-y">
            <Icon color="var(--green)" mr={2}>
              <FaArrowUp />
            </Icon>
            24% this month
          </Text>
        </Box>
        <Root>
          {orders.map((order, index) => (
            <Item key={index}>
              <Connector>
                <Separator />
                <Indicator scale={1.4} bgColor={order.color} color="#fff">
                  <Icon>
                    <order.icon />
                  </Icon>
                </Indicator>
              </Connector>
              <Content>
                <Title>{order.title}</Title>
                <Description>This is Order</Description>
              </Content>
            </Item>
          ))}
        </Root>
      </Box>
    </>
  );
}
