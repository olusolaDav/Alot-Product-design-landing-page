"use client";

import { Stack, Box } from "@/helpers/constants";
import Image from "next/image";
import Conatainer from "@/components/Container";
import SubHeading from "@/components/SubHeading";
import MainText from "@/components/MainText";
import ButtonFill from "@/components/button/ButtonFill";
import CustomLink from "@/components/CustomLink";



const Prototype = ({isLastCard, heading, body, img, href}) => {
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
          width={{ base: "100%", sm: "50%" }}
          paddingTop="0px"
          paddingBottom={{ base: "16px", sm: "8px" }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
          spacing={{ base: "16px", md: 8 }}
        >
          <SubHeading text={heading} fontSize={{ base: 24, md: 32, lg: 48 }} />
          <MainText text={body} />

          {isLastCard && (
            <CustomLink href={href}>
              {" "}
              <ButtonFill text="View Prototype" size="md" />
            </CustomLink>
          )}
        </Stack>
        <Box width={{ base: "100%", sm: "50%" }} height={"110%"}>
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

export default Prototype;
