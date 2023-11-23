"use client";
import Container from "@/components/Container";
import { Box, Center, Stack, Text } from "@chakra-ui/react";

export default function Heros() {
  return (
    <Box
      bgImage="url('../assets/medi-heros.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      width={"full"}
      h="80vh"
    >
      <Stack
        width={"100%"}
        height={"100%"}
        align={"flex-end"}
        justify={"center"}
        px={{ base: "16px", sm: "32px", md: "64px", xl: "120px" }}
      >
        <Stack maxWidth={{base: 280, sm: 360, md: 500}} spacing={6}>
          {" "}
          <Text
            fontSize={{ base: 24,  md: 32, lg: 42 }}
            color={"secondary"}
            textAlign={"right"}
          >
            Medi Alert{" "}
          </Text>
          <Text
            fontSize={{ base: 12, sm: 14, md: 16 }}
            color={"secondary"}
            textAlign={"right"}
            lineHeight={'1'}
          >
            A mobile app to fast-track the time a patient gets medical care and
            first aid during emergency situations.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
