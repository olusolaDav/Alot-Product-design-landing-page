"use client";
import { useState } from "react";
import { Stack, Text, VStack, Box, HStack, Button } from "@/helpers/constants";
import Image from "next/image";
import Title from "@/components/Heading";
import MainText from "../../MainText";
import faqImgSrc from "@/assets/faqs-pattern.svg";
//import { FaqsList } from "./FaqsList";


import FaqShow from "@/components/FaqShow";

const FAQs = ({ FaqsList }) => {
  const [showAll, setShowAll] = useState(false);

  const faqListToShow = showAll ? FaqsList : FaqsList.slice(0, 4); // Decide which FAQs to display
  const toggleFAQs = () => {
    setShowAll(!showAll);
  };

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
          {faqListToShow.map((item, index) => {
            return (
              <FaqShow key={index} title={item.question} defaultExpanded="true">
                {item.answer}
              </FaqShow>
            );
          })}

          <Button
            variant="outline"
            size={"md"}
            maxWidth={150}
            borderRadius={0}
            color={"#F7971D"}
            _hover={{ bg: "#F6F5FF", borderColor: "#FFD700" }}
            onClick={toggleFAQs}
          >
            <Text
              fontFamily="Inter"
              lineHeight="1.2"
              fontWeight="regular"
              fontSize={{ base: 12, md: 14, lg: 16 }}
              color="Button.Primary/Text_Hover"
              textAlign="center"
            >
              {!showAll ? " View All" : "View Less"}
            </Text>
          </Button>
        </Stack>

        <Box
          width={{ base: "0", sm: "20%" }}
          display={{ base: "none", sm: "block" }}
          maxWidth="100%"
          spacing={{ base: 2, sm: 4, md: 6 }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
        >
          <Image src={faqImgSrc} alt="steps" height={showAll ? 500 : 300} />
        </Box>
      </Stack>
    </VStack>
  );
};

export default FAQs;
