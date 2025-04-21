import { projects } from "@/assets/data/project";
import {
  Box,
  Heading,
  Icon,
  Image,
  Progress,
  Table,
  Text,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { Tooltip } from "../ui/tooltip";

export default function Projects() {
  const { Root, Header, ColumnHeader, Cell, Body, Row, Footer, ScrollArea } =
    Table;
  return (
    <Box as="section" className="projects box">
      <Box as="header" className="project-header" mb={4}>
        <Heading fontWeight={700} mb={2} color="var(--heading-color)">
          Projects
        </Heading>
        <Text className="center-y" gap={2} color="gray.400">
          <Icon color="var(--blue)">
            <FaCheck />
          </Icon>
          30 done this month
        </Text>
      </Box>
      <ScrollArea maxW="100%">
        <Root
          w={{ base: "120%", md: "150%", lg: "100%" }}
          showColumnBorder
          borderWidth={1}
        >
          <Header>
            <Row>
              <ColumnHeader color="var(--heading-color)" fontWeight={700}>
                No.
              </ColumnHeader>
              <ColumnHeader color="var(--heading-color)" fontWeight={700}>
                Companies
              </ColumnHeader>
              <ColumnHeader color="var(--heading-color)" fontWeight={700}>
                Members
              </ColumnHeader>
              <ColumnHeader color="var(--heading-color)" fontWeight={700}>
                Budget
              </ColumnHeader>
              <ColumnHeader color="var(--heading-color)" fontWeight={700}>
                Completion
              </ColumnHeader>
            </Row>
          </Header>
          <Body>
            {projects.map((project, index) => (
              <Row key={index}>
                <Cell>{index + 1}</Cell>
                <Cell>
                  <div className="center-y">
                    <Image src={project.image} w="40px" />
                    <Text>{project.company}</Text>
                  </div>
                </Cell>
                <Cell>
                  <div className="center-y">
                    {project.members.map((member, ind) => (
                      <Tooltip key={ind} content="Member">
                        <Image w="30px" rounded="full" src={member} key={ind} />
                      </Tooltip>
                    ))}
                  </div>
                </Cell>
                <Cell>{project.budget}$</Cell>
                <Cell>
                  <Progress.Root rounded={"md"} maxW="100%">
                    <Progress.Track rounded={12}>
                      <Progress.Range
                        bgColor={
                          project.completion === 100
                            ? "var(--green)"
                            : "var(--blue)"
                        }
                      />
                    </Progress.Track>
                  </Progress.Root>
                </Cell>
              </Row>
            ))}
          </Body>
          <Footer>
            <Row>
              <Cell colSpan={4}>Total</Cell>
              <Cell>{projects.length}</Cell>
            </Row>
          </Footer>
        </Root>
      </ScrollArea>
    </Box>
  );
}
