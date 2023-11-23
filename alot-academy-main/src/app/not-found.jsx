/* eslint-disable react/no-unescaped-entities */
"use client";

import { Stack, Text, Box, HStack } from "@/helpers/constants";
import error404 from "@/assets/404.svg";
import Image from "next/image";
import ButtonFill from "@/components/button/ButtonFill";
import ButtonStroke from "@/components/button/ButtonFill";

import Conatainer from "@/components/Container";
import Wrapper from "@/components/Container";

export default async function NotFound() {
  return (
    <Wrapper  px = {{ base: "16px", sm: "32px", md: "64px", xl: "120px",  }}>
      {" "}
      <Conatainer>
        <Stack
          direction={{ base: "column", sm: "row" }}
          justify="center"
          align="center"
          spacing={2}
        >
          <Box width="100%" height={"110%"}>
            <Image src={error404} alt="Error 404" />
          </Box>
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
              fontSize={{ base: "40px", md: "56px" }}
              color="#172D54"
            >
              So Sorry!
            </Text>
            <Text
              fontFamily="Inter"
              lineHeight="1.1"
              fontWeight="regular"
              fontSize={{ base: "14px", md: "18px", lg: "24px" }}
              color="#172D54"
              align={{ base: "center", sm: "left" }}
              maxWidth="100%"
            >
              Looks like the page is on vacation. We'll try to bring it back
              soon!
            </Text>
            <Text
              fontFamily="Inter"
              lineHeight="1.1"
              fontWeight="regular"
              fontSize={{ base: "12px", md: "14px", lg: "16px" }}
              color="#172D54"
              align={{ base: "center", sm: "left" }}
              maxWidth="100%"
            >
              For further assistance, please reach out to our support team.
            </Text>
            <HStack>
              {" "}
              <ButtonStroke text={"Contact Us"} link="contact-us" size="md" />
              <ButtonFill text="Get Started" link="/" size="md" />
            </HStack>
          </Stack>
        </Stack>
      </Conatainer>
    </Wrapper>
  );
};


