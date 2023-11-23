"use client";
import { Stack, Text, Box, Grid, GridItem, Center,  } from "@/helpers/constants";
import Image from "next/image";

const GridTemplate = ({ items, templateColumns= {
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        } }) => {
  return (
    <>
      <Grid
        templateColumns={templateColumns}
        gap={3}
      >
        {items.map((item, index) => (
          <GridItem key={index} w="100%">
            {" "}
            <Stack
      
              px={{ base: "15px", md: "10px" }} // Adjust padding for different screen sizes
      pt={8}
              align="center" // Center elements vertically on smaller screens
              spacing={4}
              maxWidth="300px"
              height={{ base: "300px",  md: "320px" }}
              background="white"
              boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
            >
              <Stack
                justify="flex-start" // Center elements horizontally on smaller screens
                align="center" // Center elements vertically on smaller screens
                spacing={6}
              >
                <Image src={item.icon} alt={item.title} height="50" />
                {/* <Box width="100px" height="100px" bg="#f4f4f4" />{" "} */}
                {/* Add a background color for illustrations */}
                <Text
                  fontFamily="Inter"
                  lineHeight="1.2"
                  fontWeight="bold"
                  fontSize={{ base: "18px", md: "24px" }} // Adjust font size for different screen sizes
                  color="rgba(23, 45, 84, 0.961)"
                  width="100%"
                  maxWidth="100%"
                  textAlign="center"
                >
                  {item.heading}
                </Text>
                <Text
                  fontFamily="Inter"
                  lineHeight="1.2"
                  fontWeight="regular"
                  fontSize={{ base: "12px", md: "14px" }}
                  color="rgba(23, 45, 84, 0.961)"
                  width="100%"
                  maxWidth="100%"
                  textAlign="center"
                >
                  {item.text}
                </Text>
              </Stack>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default GridTemplate;
