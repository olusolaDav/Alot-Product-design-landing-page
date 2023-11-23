"use client";

import { Box, Stack } from "@chakra-ui/react";
import { Image } from "next/image"; // If you are using Next.js
import "./styles.css"; // Import the external CSS file

function Carousel({ icons }) {
  return (
    <Box color="#000000">
      <Stack
        direction="column" // Stacking the children vertically
        align="center"
        justify="center"
        position="relative"
      >
        <Box width="100%" height="fit-content">
          <Stack
            direction="column" // Stacking the children vertically
            align="center"
            justify="center"
          >
            <Box
              width="100%"
              overflow="hidden"
              userSelect="none"
              className="common" // Apply the CSS class for common styles
            >
              {icons.map((icon, index) => (
                <Box key={index} padding="5px 10px">
                  <Image
                    src={icon}
                    alt="icons"
                    width={100}
                    height={100}
                    objectFit="contain"
                  />
                </Box>
              ))}
            </Box>
            <Box
              width="100%"
              overflow="hidden"
              userSelect="none"
              className="common" // Apply the CSS class for common styles
            >
              {icons.map((icon, index) => (
                <Box key={index} padding="5px 10px">
                  <Image
                    src={icon}
                    alt="icons"
                    width="100%"
                    height="auto"
                    objectFit="contain"
                  />
                </Box>
              ))}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Carousel;
