'use client'
import { Stack, VStack, Text, Box, Square } from "@chakra-ui/react"; 
import Image from "next/image";
import MainText from '@/components/MainText'
import SubHeading from "../../SubHeading";

export default function Card({heading, body, img}) {
  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      width="100%"
      spacing={{ base: 2, sm: 4, md: 6 }}
      align={{ base: "center" }}
      mb={'6'}
    >
      <VStack
        width={{ base: "100%", sm: "60%" }}
        maxWidth="100%"
        spacing={{ base: 2 }}
        justify={{ base: "center", sm: "flex-start" }}
        align={{ base: "center", sm: "flex-start" }}
      >
        <SubHeading text={heading} />
        <MainText text={body} />
      </VStack>

      <Box
        width={{ base: "100%", sm: "40%" }}
        maxWidth="90%"
        mt={{ base: 2, sm: 0 }}
        align="center"
        justify="center"
      >
        <Square
          bg={"white"}
          p={6}
          boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
        >
          <Image src={img} alt="steps" width={100} />
        </Square>
      </Box>
    </Stack>
  );
}
