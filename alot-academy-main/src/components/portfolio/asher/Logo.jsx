"use client";

import { Stack, Box } from "@/helpers/constants"
import asher from "@/assets/Asher-logo.svg";
import Image from "next/image";
import Conatainer from "@/components/Container";
import MainText from "@/components/MainText";

const Logo = () => {
  return (
    <Conatainer>
      <Stack
        gap={6}
        direction={{ base: "column", sm: "row" }}
        justify="center"
        align="center"
        spacing={{ base: 4, md: 6 }}
      >
        <Stack
          width={{ base: "100%", sm: "40%" }}
          paddingTop="0px"
          paddingBottom={{ base: "16px", sm: "8px" }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
          spacing={{ base: "16px", md: 8 }}
        >
          <MainText
            text={
              "We conceived the notion of incorporating a relatable icon and crafting narratives around it. Our goal was to convey that our client's product is an indispensable and versatile asset in all aspects of life. This inspired the choice of the butterfly as our emblem. However, we didn't settle for just any butterfly; our aim was to communicate elegance and sophistication, leading us to select the Monarch Butterfly"
            }
          />
        </Stack>

        <Box width={{ base: "100%", sm: "60%" }} height={"110%"}>
          <Image
            src={asher}
            alt="alot gif"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Stack>
    </Conatainer>
  );
};

export default Logo;
