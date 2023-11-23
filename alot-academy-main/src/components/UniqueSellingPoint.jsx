"use client";
import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import quote from "@/assets/quote.svg";
import ButtonFill from "@/components/button/ButtonFill";
import Conatainer from "./Container";


export default function UniqueSellingPoint({
  heading,
  subHeading,
  buttonText,
}) {
  return (
    <Conatainer>
      {" "}
      <Box
       
        mt={{ base: 12, md: 16 }}
        maxWidth="100%"
      >
        <Box position="relative">
          <Image src={quote} alt="Quote Image" width={100} />
          <Stack
            spacing={{ base: 4, md: 8 }}
          
            justify={{ base: "center" }}
            align={{ base: "center" }}
            position="absolute"
            top="10"
            right="0"
          >
            <Text
              fontFamily="Inter"
              lineHeight="1.2"
              align="center"
              fontWeight="bold"
              fontSize={{ base: 18, md: 24, lg: 43 }}
              color="#172D54"
            >
              {heading}
            </Text>
{/* 
            <Text
              lineHeight="1.2"
              fontWeight="regular"
              fontSize={{ base: "12px", md: 14, lg: 16 }}
              color="#172D54"
              align="center"
              width="100%" // Adjusted to 100% on small screens
              maxWidth="100%"
            >
              {subHeading}
            </Text>

            <ButtonFill text={buttonText} link="hire-us" size="sm" /> */}
          </Stack>
        </Box>
        <Box pt={{ base: 80, sm: 60, md: 40 }}></Box>
      </Box>
    </Conatainer>
  );
}
