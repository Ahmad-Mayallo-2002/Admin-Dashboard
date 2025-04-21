import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center h="calc(100vh - 64px - 54px - 3.5rem)">
      <Spinner
        w="75px"
        h="75px"
        borderColor="var(--blue)"
        borderTopColor="transparent"
        borderWidth={5}
      />
    </Center>
  );
}
