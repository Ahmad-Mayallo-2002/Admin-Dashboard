import { tableProjects } from "@/assets/data/project";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  Progress,
} from "@chakra-ui/react";

export default function ProjectsTable() {
  return (
    <Box as="section" mt={8} className="projects-table box">
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
        Projects Table
      </Heading>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Completion</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableProjects.map((project) => (
              <tr key={project.company}>
                <td>
                  <Box className="center-y" gap={2}>
                    <Image src={project.image} w="35px" h="35px" />
                    <Heading
                      fontWeight={700}
                      color="var(--heading-color)"
                      fontSize={18}
                    >
                      {project.company}
                    </Heading>
                  </Box>
                </td>
                <td>${project.budget}</td>
                <td>{project.status}</td>
                <td>
                  {project.completion}%
                  <Progress.Root
                    mt={1}
                    value={project.completion}
                    colorPalette={
                      project.completion === 100
                        ? "green"
                        : project.completion >= 50
                        ? "blue"
                        : "red"
                    }
                  >
                    <Progress.Track>
                      <Progress.Range />
                    </Progress.Track>
                  </Progress.Root>
                </td>
                <td>
                  <ButtonGroup attached>
                    <Button colorPalette="red" size="xs">
                      Delete
                    </Button>
                    <Button colorPalette="green" size="xs">
                      Edit
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </Box>
  );
}
