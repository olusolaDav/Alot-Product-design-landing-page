"use client";
import Container from "@/components/Container";
import { Box, Center, Stack, HStack, Square, Grid, GridItem } from "@chakra-ui/react";
import pattern from "@/assets/pattern2.svg";
import Title from "@/components/Heading";
import Image from "next/image";
import line from "@/assets/Line.svg";
import webApp from "@/assets/web-app-icon.svg";
import mobileApp from "@/assets/mobile-icon-header.svg";
import productDesign from "@/assets/product-design-icon.svg";
import SubHeading from "@/components/SubHeading";
import CustomLink from "@/components/CustomLink";


const items = [
  { link: "Web development", icon: webApp, href: "/services/web-development" },
  { link: "Mobile Application", icon: mobileApp, href: "/services/mobile-application" },
  { link: "Product design", icon: productDesign, href: "/services/product-design" },
];

export default function Heros() {
  const backgroundImage = `url(${pattern})`;
  return (
    <Container>
      <Box
        bgImage={backgroundImage}
        bgPosition="center"
        bgRepeat="no-repeat"
        position={"relative"}
      >
        <Center h="100px">
          {" "}
          <Stack
            align={"center"}
            justify={"center"}
            px={{ base: 8, sm: 4, md: 0 }}
          >
            <Title text="Our Services" />
            <Image src={line} alt="underline" width={"70%"} />
          </Stack>{" "}
        </Center>

        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
          }}
          px={{ base: "16px", sm: "32px", md: "64px", xl: "120px" }}
          gap={3}
          align="center"
          justify="center"
          maxWidth={"100%"}
        >
          {items.map((item, index) => (
            <GridItem key={index} w="100%">
              <CustomLink href={item.href}>
                <Stack
                  //  w={{ base: "100px", sm: "180px", md: "300px" }}
                  maxWidth="280px"
                  h={{ base: "100px", sm: "180px", md: "300px" }}
                  bg={"white"}
                  border={"2px"}
                  background="white"
                  boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
                  borderColor={"white"}
                  _hover={{ borderColor: "primary" }}
                  align="center"
                  justify="center"
                >
                  <Stack
                    align={"center"}
                    justify={"center"}
                    spacing={{ base: 2, sm: 4, md: 6 }}
                  >
                   
                      <Image
                        src={item.icon}
                        alt={item.link}
                        width={30}
                        height={30}
                      />
                  
                    <SubHeading text={item.link} />
                  </Stack>
                </Stack>
              </CustomLink>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
