"use client";
import Container from "@/components/Container";
import {
  Box,
  Center,
  Stack,

} from "@chakra-ui/react";
import pattern from "@/assets/pattern2.svg";
import Title from "@/components/Heading";
import Image from "next/image";
import line from "@/assets/Line.svg";



export default function Heros({title}) {
  const backgroundImage = `url(${pattern})`;
  return (
    <Container>
      <Box
        bgImage="url('../assets/pattern2.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        width={'full'}
        h="100px"
      >
        <Center h="100px">
          {" "}
          <Stack
            align={"center"}
            justify={"center"}
            px={{ base: 8, sm: 4, md: 0 }}
          >
            <Title text={title} />
            <Image src={line} alt="underline" width={"70%"} />
          </Stack>{" "}
        </Center>
      </Box>
    </Container>
  );
}
