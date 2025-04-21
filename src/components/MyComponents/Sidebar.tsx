import { links } from "@/assets/data/sidebarLinks";
import { Box, Link, List, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <Box
      as="aside"
      bgColor="var(--black)"
      color="#fff"
      minH="100vh"
      id="sidebar"
      p={3}
      transitionDuration="500ms"
    >
      <List.Root>
        {links.map((link) => (
          <List.Item asChild key={link.name}>
            <Link
              bgColor={
                pathname === link.href
                  ? "var(--blue) !important"
                  : "transparent"
              }
              color="#fff"
              _hover={{ bgColor: "#fff3" }}
              className="center-y"
              transitionDuration="300ms"
              gap={2}
              mb={4}
              p={{ base: 2, md: 3 }}
              rounded={8}
              href={link.href}
            >
              <link.icon size={25} />
              <Text as="span" display={{ base: "none", lg: "inline" }}>
                {link.name}
              </Text>
            </Link>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
}
