"use client";
import { Box, Stack, VStack, Text, Center } from "@/helpers/constants";
import Title from "@/components/Heading";
import MainText from "@/components/MainText";
import ButtonFill from "@/components/button/ButtonFill";
import { StepsList } from "./stepList";
import Image from "next/image";
import Container from "@/components/Container";


export default function Steps() {
  return (
    <Container>
      {" "}
      <Stack
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        width="100%"
        spacing={{ base: 2, sm: 4, md: 6 }}
      >
        <VStack
          width={{ base: "100%", sm: "50%" }}
          maxWidth="100%"
          spacing={{ base: 2, sm: 4, md: 6 }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
        >
          <Title text="Steps to own your dream digital platform" />
          <MainText
            text={
              "How your business is perceived affects its success, regardless of whether it’s a start-up, an established company , or a product. In a landscape of boundless choices, your enterprise should seek pathways to forge emotional bonds with customers, establish irreplaceable presence, and foster enduring connections. You can achieve this by following these steps."
            }
          />
          <Box>
            <ButtonFill text="Hire US" link="hire-us" size="md" />
          </Box>
        </VStack>

        <Stack
          width={{ base: "100%", sm: "50%" }}
          maxWidth="100%"
          spacing={4}
          mt={{ base: 6, sm: 0 }}
        >
          {StepsList.map((item) => (
            <VStack
              key={item.id}
              background="linear-gradient(45deg, #1f141a 0%, #474b6d 100%)"
              justify={"flex-start"}
              align={"flex-start"}
            >
              <Stack
                spacing={{ base: 2, sm: 4 }}
                direction="row"
                height={"100px"}
                p={[2, 4, 6]}
                justify={"center"}
                align={"center"}
              >
                <Image src={item.image} alt="steps" width={20} />
                <Text color={"white"} fontSize={{ base: 10, sm: 12, md: 14 }}>
                  {item.body}
                </Text>
              </Stack>
            </VStack>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
