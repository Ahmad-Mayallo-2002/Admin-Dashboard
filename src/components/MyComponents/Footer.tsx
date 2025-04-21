import { Box, Flex, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      as="footer"
      color="var(--black)"
      id="footer"
      bgColor="#eee"
      rounded={8}
      p={3}
      mt={4}
      className="space-between"
      gapY={4}
      flexDir={{ base: "column", lg: "row" }}
    >
      <span>&copy; All Copyrights are Reserved 2025</span>
      <Flex fontSize={30} gap={3}>
        <Link
          transitionDuration="300ms"
          _hover={{ color: "var(--blue)" }}
          href="https://github.com/Ahmad-Mayallo-2002"
        >
          <FaGithub />
        </Link>
        <Link
          transitionDuration="300ms"
          _hover={{ color: "var(--blue)" }}
          href="https://www.linkedin.com/in/ahmad-mayallo"
        >
          <FaLinkedin />
        </Link>
      </Flex>
    </Box>
  );
}
