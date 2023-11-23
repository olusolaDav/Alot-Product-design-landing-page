"use client";

import { Stack, Box } from "@/helpers/constants";
import theLogo from "@/assets/the-asher-logo-cover-image.svg";
import miniBag from "@/assets/minibag-mockup.svg";
import Image from "next/image";
import Conatainer from "@/components/Container";
import SubHeading from "@/components/SubHeading";
import MainText from "@/components/MainText";

const Branding = () => {
  return (
    <Conatainer>
      <Stack
        gap={6}
        direction={{ base: "column", sm: "row" }}
        justify="center"
        align="center"
        spacing={{ base: "20px", md: "40px" }}
      >
        <Box width={{ base: "100%", sm: "50%" }} height={"110%"}>
          <Image
            src={theLogo}
            alt="alot gif"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Stack
          width={{ base: "100%", sm: "50%" }}
          paddingTop="0px"
          paddingBottom={{ base: "16px", sm: "8px" }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
          spacing={{ base: "16px", md: 8 }}
        >
          <SubHeading
            text={"Branding"}
            fontSize={{ base: 24, md: 32, lg: 48 }}
          />
          <MainText
            text={
              "While working on this project, our primary objective was to craft a brand that conveys a sense of quality, excellence, and elegance. Given that the business owner offers a wide range of products catering to fundamental human needs, our team's emphasis was on establishing a brand that exudes quality consistently across all touchpoints."
            }
          />

          <Stack align={'flex-end'} >
            {" "}
            <Image
              src={miniBag}
              alt="mini Bag"
              style={{ width: "80%", height: "auto" }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Conatainer>
  );
};

export default Branding;
