"use client";
import { Stack, Text, VStack, Box, HStack } from "@/helpers/constants";
import Image from "next/image";
import Title from "@/components/Heading";
import MainText from "../../MainText";
import faqImgSrc from "@/assets/faqs-pattern.svg";
import { FaqsList } from "./FaqsList";
import FaqShow from "@/components/FaqShow";

const FAQs = () => {
  return (
    <VStack
      mt={{ base: 16, md: 20 }}
      maxWidth="100%"
      spacing={{ base: 4, md: 6, lg: 8 }}
      align={{ base: "center", sm: "flex-start" }}
    >
      <Box>
        <Title text="FAQs" />
      </Box>

      <MainText text="Listed below are common questions or frequently asked questions (FAQs) to ensure you make an informed decision. Enjoy your reading!" />

      <Stack
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        width="100%"
        spacing={{ base: 2, sm: 4, md: 6 }}
      >
        <Stack
          width={{ base: "100%", sm: "80%" }}
          maxWidth="100%"
          spacing={4}
          mt={{ base: 6, sm: 0 }}
        >
          {FaqsList.map((item, index) => {
            return (
              <FaqShow
                key={index}
                title={item.question}
                defaultExpanded="true"
              >
                {item.answer}
              </FaqShow>
            );
          })}
        </Stack>

        <Box
          width={{ base: "0", sm: "20%" }}
          display={{ base: "none", sm: "block" }}
          maxWidth="100%"
          spacing={{ base: 2, sm: 4, md: 6 }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
        >
          <Image src={faqImgSrc} alt="steps" height={500} />
        </Box>
      </Stack>
    </VStack>
  );
};

export default FAQs;
