"use client";

import { Stack, Text,  Box} from "@/helpers/constants";
import alotGif from "@/assets/Alot-final-gif.gif";
import Image from "next/image";
import ButtonFill from '../button/ButtonFill'
import Conatainer from '@/components/Container'

const Hero = () => {
  return (
 
      <Stack
        gap={6}
        direction={{ base: "column", sm: "row" }}
        justify="center"
        align="center"
        spacing={{ base: "20px", md: "40px" }}
      >
        <Stack
          paddingTop="0px"
          paddingBottom={{ base: "16px", sm: "8px" }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
          spacing={{ base: "16px", md: 8 }}
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.4"
            fontWeight="bold"
            align={{ base: "center", sm: "left" }}
            fontSize={{ base: "14px", md: "16px" }}
            color="#172D54"
          >
            Welcome to Alot Academy
          </Text>
          <Text
            fontFamily="Inter"
            lineHeight="1.1"
            fontWeight="regular"
            fontSize={{ base: "32px", md: "42px", lg: "56px" }}
            color="#172D54"
            align={{ base: "center", sm: "left" }}
            maxWidth="100%"
          >
            We are the gateway to the digital world
          </Text>
          <ButtonFill text="Get To Know About Us" link="hire-us" size="md" />
        </Stack>

        <Box width="100%" height={"110%"}>
          <Image
            src={alotGif}
            alt="alot gif"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Stack>
   
  )
};

export default Hero;
