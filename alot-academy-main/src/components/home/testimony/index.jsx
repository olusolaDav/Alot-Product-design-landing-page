"use client";
import {
  Stack,
  Text,
  VStack,
  Grid,
  GridItem,
  HStack,
} from "@/helpers/constants";
import Image from "next/image";
import { items } from "./data";
import Title from "@/components/Heading";
import Container from "@/components/Container";


const Testimonials = () => {
  return (
    <Container>
    
      <VStack
        mt={{ base: 16, md: 20 }}
        maxWidth="100%"
        spacing={{ base: 4, md: 6, lg: 8 }}
        align={"center"}
      >
        <Title text="Testimonials" />

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
                padding={{ base: "12px", sm: "20px" }}
                justify="flex-start"
                align="center"
                spacing="16px"
                height={{ base: "200px", sm: "250px", md: "280px" }}
                maxWidth="300px"
                background="#FFFFFF"
                boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
              >
                <Stack justify="flex-start" align="flex" spacing="16px">
                  <Text
                    fontFamily="Inter"
                    lineHeight="1.2"
                    fontWeight="regular"
                    fontSize={{ base: "12px", md: 14, lg: 16 }}
                    color="#172D54"
                    width="100%"
                    maxWidth="100%"
                  >
                    {item.body}
                  </Text>

                  <HStack spacing={{ base: 2 }} justify="cemter">
                    <Image src={item.logo} alt={item.company} height="50" />
                    <Text
                      fontFamily="Inter"
                      lineHeight="1.4"
                      fontWeight="bold"
                      fontSize={{ base: "12px", md: 14, lg: 16 }}
                      color="rgba(23, 45, 84, 0.961)"
                      width="100%"
                      maxWidth="100%"
                    >
                      {item.company}
                    </Text>
                  </HStack>
                </Stack>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Testimonials;
