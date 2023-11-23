"use client";
import { Stack, Text, Box, Grid, GridItem, Center } from "@/helpers/constants";
import web from "@/assets/web-icon-service.svg";
import mobile from "@/assets/mobile-service-icon.svg";
import product from "@/assets/product-service-icon.svg";
import Image from "next/image";
import Conatainer from "@/components/Container";


const items = [
  {
    icon: web,
    heading: "Web Development",
    services: [
      "Front-end Development",
      "Back-end Development",
      "E-commerce website",
      "Blog website",
      "Portfolio/Showcase",
      "Landing Page",
      "CMS (Wordpress)",
    ],
  },
  {
    icon: mobile,
    heading: "Mobile Application",
    services: [
      "Native App Development",
      "Cross-Platform Development",
      "Progressive Web Apps (PWA)",
      "Embedded Software",
    ],
  },
  {
    icon: product,
    heading: "Product Design",
    services: [
      "User Research",
      "Brand Identity",
      "UI/UX Web Design",
      "UI/UX Mobile App Design",
      "Custom Graphics",
      ,
    ],
  },
];

const Services = () => (
  <Conatainer>
    {" "}
    <Stack
      justify="center"
      align="center"
      spacing={{ base: "32px", md: "64px" }} // Adjust spacing for different screen sizes
    >
      <Box
        border="2px"
        borderColor="secondary"
        px={{ base: "5px", md: "10px" }}
        py={{ base: "10px", md: "15px" }}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={3}
        >
          {items.map((item, index) => (
            <GridItem key={index} w="100%">
              {" "}
              <Stack
                py={6}
                align="center" // Center elements vertically on smaller screens
                spacing={2}
                px={{ base: "25px", md: "30px" }} // Adjust padding for different screen sizes
                maxWidth="320px"
                height={{ base: "360px", sm: "350px", md: "350px" }}
                background="linear-gradient(45deg, #1f141a 0%, #474b6d 100%)"
                boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
              >
                <Stack
                  justify="flex-start" // Center elements horizontally on smaller screens
                  align="center" // Center elements vertically on smaller screens
                  spacing={5}
                >
                  <Image src={item.icon} alt={item.heading} height="50" />
                  {/* <Box width="100px" height="100px" bg="#f4f4f4" />{" "} */}
                  {/* Add a background color for illustrations */}
                  <Text
                    fontFamily="Inter"
                    fontWeight="bold"
                    fontSize={{ base: "18px", md: "24px" }} // Adjust font size for different screen sizes
                    color="white"
                    width="100%"
                    maxWidth="100%"
                    textAlign="center"
                  >
                    {item.heading}
                  </Text>
                  <Stack>
                    {item.services.map((item, index) => (
                      <Text
                        key={index}
                        fontFamily="Inter"
                        lineHeight="1.2"
                        fontWeight="regular"
                        fontSize={{ base: "12px", md: "14px" }}
                        color="white"
                        width="100%"
                        maxWidth="100%"
                        textAlign="center"
                      >
                        {item}
                      </Text>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Stack>
  </Conatainer>
);

export default Services;
