"use client";
import {
  Box,
  Stack,
  VStack,
  Text,

  HStack,
} from "@chakra-ui/react"; 
import Title from "@/components/Heading";
import SubHeading from '@/components/SubHeading'
import MainText from "@/components/MainText";
import ButtonFill from "@/components/button/ButtonFill";



import Image from "next/image";
import Conatainer from "@/components/Container";

const  Process = ({heading, subHeading, steps}) => {
  
  return (
    <Conatainer maxWidth="100%">
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
          <Title text={heading} />
          <MainText text={subHeading} />
          <Box>
            <ButtonFill text="Hire US" link="hire-us" size="md" />
          </Box>
        </VStack>

        <Stack
          width={{ base: "100%", sm: "50%" }}
          maxWidth="100%"
          spacing={{ base: 6, sm: 20, md: 8 }}
          justify={"flex-start"}
          align={"flex-start"}
        >
          {steps.map((step, index) => (
            <HStack
              key={index}
              spacing={{ base: 2, sm: 4 }}
              height={"100px"}
              justify={"flex-start"}
              align={"flex-start"}
            >
              <Image src={step.icon} alt="steps" width={40} />

              <VStack align={"flex-start"}>
                <SubHeading text={step.title} />
                <Text c olor={"white"} fontSize={{ base: 10, sm: 12, md: 14 }}>
                  {step.desc}
                </Text>
              </VStack>
            </HStack>
          ))}
        </Stack>
      </Stack>
    </Conatainer>
  );
}

export default Process;