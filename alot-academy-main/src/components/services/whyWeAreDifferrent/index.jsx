"use client";
import { Box, VStack, Stack } from "@chakra-ui/react";
import Title from "../../Heading";
import GridTemplate from '../../GridTemplate'
import Conatainer from "@/components/Container";

export default function WhyUs({ cards }) {
  return (
    <Conatainer>
      <Stack
        maxWidth="100%"
        align={"center"}
        spacing={{ base: "16px", md: "32px" }} // Adjust spacing for different screen sizes
      >
        <Box mb={8}>
          <Title text="Why we are different" />
        </Box>

        <GridTemplate items={cards} />
      </Stack>
    </Conatainer>
  );
}
