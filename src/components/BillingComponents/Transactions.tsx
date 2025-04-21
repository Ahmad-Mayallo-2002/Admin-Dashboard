import { transactions } from "@/assets/data/transactions";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { FaExclamation, FaXmark } from "react-icons/fa6";

export default function Transactions() {
  return (
    <Box as="section" className="transactions box">
      <Heading color="var(--heading-color)" fontWeight={700} mb={4}>
        Transactions
      </Heading>
      <Text color="gray.400" mb={4} fontWeight={700}>
        NEWEST
      </Text>
      {transactions.map((trans) => (
        <Flex gap={4} className="space-between" mb={4} key={trans.id}>
          <Icon
            borderWidth={2}
            p={3}
            rounded="full"
            color={trans.color}
            borderColor={trans.color}
          >
            {trans.status === "Completed" ? (
              <FaCheck size={40} />
            ) : trans.status === "Failed" ? (
              <FaXmark size={40} />
            ) : (
              <FaExclamation size={40} />
            )}
          </Icon>
          <Box flexGrow={1}>
            <Text color="var(--heading-color)" fontWeight={700}>
              {trans.user}
            </Text>
            <Text color="gray.400">{new Date().toLocaleDateString()}</Text>
          </Box>
          <div>
            <Text color={trans.color} fontWeight={700}>
              ${trans.amount}
            </Text>
          </div>
        </Flex>
      ))}
    </Box>
  );
}
