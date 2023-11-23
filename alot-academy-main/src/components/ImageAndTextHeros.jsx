"use client";

import { Stack, Text, Box } from "@/helpers/constants";
import Image from "next/image";
import Conatainer from "@/components/Container";

const Hero = ({img, Headline, subHealine}) => {
  return (
    <Conatainer>
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
            fontWeight="regular"
            align={{ base: "center", sm: "left" }}
            fontSize={{ base: "24px", md: "32px" }}
            color="#172D54"
          >
            {Headline}
          </Text>
          <Text
            fontFamily="Inter"
            lineHeight="1.4"
            fontWeight="regular"
            fontSize={{ base: "12px", md: "14px", lg: "16px" }}
            color="#172D54"
            align={{ base: "center", sm: "left" }}
            maxWidth="100%"
          >
            {subHealine}
          </Text>

        </Stack>

        <Box width="100%" height={"110%"}>
          <Image
            src={img}
            alt="alot gif"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Stack>
    </Conatainer>
  );
};

export default Hero;
