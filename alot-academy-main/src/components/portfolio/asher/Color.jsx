"use client";

import { Stack, Box } from "@/helpers/constants";
import theColor from "@/assets/Asher-rebrand-color.svg";
import colorCode from "@/assets/asher-color-code.svg";
import Image from "next/image";
import Conatainer from "@/components/Container";


const Color = () => {
  return (
    <Conatainer>
      <Stack
        spacing={{base:4,sm: -14 }}
        direction={{ base: "column", sm: "row" }}
        justify="center"
        align="center"
      >
        <Box width={{ base: "100%", sm: "40%" }} height={"110%"}>
          <Image
            src={theColor}
            alt="Asher Color brand"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Stack
          width={{ base: "100%", sm: "60%" }}
          paddingTop="0px"
          paddingBottom={{ base: "16px", sm: "8px" }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
          spacing={{ base: "16px", md: 8 }}
        >
          <Box>
            <Image
              src={colorCode}
              alt="Asher color code"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Stack>
      </Stack>
    </Conatainer>
  );
};

export default Color;
