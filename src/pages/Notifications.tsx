import { Box, Grid, Heading } from "@chakra-ui/react";

export default function Notifications() {
  return (
    <>
      <Box as="section" className="notifications box">
        <Heading color="var(--heading-color)" mb={4} fontWeight={700}>
          Notifications
        </Heading>
        <Grid gap={4}>
          {[
            "var(--black)",
            "var(--green)",
            "var(--red)",
            "var(--pink)",
            "var(--blue)",
            "var(--orange)",
            "var(--heading-color)",
          ].map((color, index) => (
            <Box key={index} color="#fff" p={3} rounded={8} bgColor={color}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              id!
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
}
