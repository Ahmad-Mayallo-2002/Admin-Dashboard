import { authors } from "@/assets/data/authors";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function AuthorsTable() {
  return (
    <Box as="section" mt={8} className="authors-table box">
      <Heading
        textAlign="center"
        fontWeight={700}
        color="#fff"
        bgColor="var(--blue)"
        p={3}
        mb={-6}
        shadow="md"
        transform="translateY(-2rem)"
        rounded={12}
      >
        Authors Table
      </Heading>

      <Box>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Function</th>
                <th>Status</th>
                <th>Employed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author.name}>
                  <td>
                    <Box className="center-y" gap={2}>
                      <Image
                        src={author.image}
                        alt={author.name}
                        w="35px"
                        h="35px"
                        rounded="full"
                      />
                      <Box>
                        <Heading
                          fontSize="sm"
                          color="var(--heading-color)"
                          fontWeight={700}
                        >
                          {author.name}
                        </Heading>
                        <Text fontSize="xs" color="gray.400">
                          {author.email}
                        </Text>
                      </Box>
                    </Box>
                  </td>
                  <td>
                    <Text fontSize="sm">{author.function}</Text>
                  </td>
                  <td>
                    <Badge
                      color="#fff"
                      fontSize="0.75rem"
                      bgColor={
                        author.status === "online"
                          ? "var(--green)"
                          : "var(--black)"
                      }
                    >
                      {author.status}
                    </Badge>
                  </td>
                  <td>
                    <Text fontSize="sm">{author.employed}</Text>
                  </td>
                  <td>
                    <ButtonGroup attached size="xs">
                      <Button colorPalette="red">Delete</Button>
                      <Button colorPalette="green">Edit</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <ScrollArea py={4}>
          <Root
            w={{ base: "120%", md: "100%" }}
            size="sm"
            showColumnBorder
            borderWidth={1}
          >
            <Header>
              <Row>
                <ColumnHeader>Author</ColumnHeader>
                <ColumnHeader>Function</ColumnHeader>
                <ColumnHeader>Status</ColumnHeader>
                <ColumnHeader>Employed</ColumnHeader>
                <ColumnHeader>Actions</ColumnHeader>
              </Row>
            </Header>
            <Body>
              {authors.map((author) => (
                <Row key={author.name}>
                  <Cell>
                    <Box className="center-y" gap={2}>
                      <Image
                        src={author.image}
                        alt={author.name}
                        w="35px"
                        h="35px"
                        rounded="full"
                      />
                      <Box>
                        <Heading
                          fontSize="sm"
                          color="var(--heading-color)"
                          fontWeight={700}
                        >
                          {author.name}
                        </Heading>
                        <Text fontSize="xs" color="gray.400">
                          {author.email}
                        </Text>
                      </Box>
                    </Box>
                  </Cell>
                  <Cell>
                    <Text fontSize="sm">{author.function}</Text>
                  </Cell>
                  <Cell>
                    <Badge
                      color="#fff"
                      fontSize="0.75rem"
                      bgColor={
                        author.status === "online"
                          ? "var(--green)"
                          : "var(--black)"
                      }
                    >
                      {author.status}
                    </Badge>
                  </Cell>
                  <Cell>
                    <Text fontSize="sm">{author.employed}</Text>
                  </Cell>
                  <Cell>
                    <ButtonGroup attached size="xs">
                      <Button colorPalette="red">Delete</Button>
                      <Button colorPalette="green">Edit</Button>
                    </ButtonGroup>
                  </Cell>
                </Row>
              ))}
            </Body>
            <Footer>
              <Row>
                <Cell colSpan={4}>Total Authors: </Cell>
                <Cell>{authors.length}</Cell>
              </Row>
            </Footer>
          </Root>
        </ScrollArea> */}
      </Box>
    </Box>
  );
}
