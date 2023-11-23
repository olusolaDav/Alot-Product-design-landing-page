"use client";

import { Stack, UnorderedList, ListItem } from "@chakra-ui/react";
import Conatainer from "@/components/Container";
import SubHeading from "@/components/SubHeading";
import MainText from "@/components/MainText";

const PersonaGrid = () => {
  const listText = [
    "Design a mobile app to fast-track the time a patient gets medical care and first aid during emergency situations considering the fact that a mobile phone is more accessible in such situations.",
    "Build an application that users can have a live session with a doctor during health emergencies.",
    "Ensure users can order medications online.",
    "Ensure that users can schedule a physical appointment with a doctor on the app.",
    "Have a ‘’call an ambulance” feature on the app.",
    "Users should be able to upload their physical examination dates on their calendars.",
  ];
  return (
    <Conatainer>
      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="flex-start"
        spacing={{ base: "20px", md: 36 }}
      >
        <Stack
          width={{ base: "100%", sm: "50%" }}
          paddingTop="0px"
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
          spacing={{ base: "16px", md: 8 }}
        >
          <SubHeading
            text={"Solution"}
            fontSize={{ base: 24, md: 30, lg: 42 }}
          />

          <Stack spacing={1}>
            {" "}
            <MainText
              text={
                "After analyzing responses from my research participants, the team figured that the digital solution should have the following features:"
              }
            />
            <UnorderedList>
              {listText.map((text, index) => (
                <ListItem key={index}>{text}</ListItem>
              ))}
            </UnorderedList>
          </Stack>
        </Stack>

        <Stack
          width={{ base: "100%", sm: "50%" }}
          paddingTop="0px"
          paddingBottom={{ base: "16px", sm: "8px" }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
          spacing={{ base: "16px", md: 8 }}
        >
          <SubHeading
            text={"Personas"}
            fontSize={{ base: 24, md: 30, lg: 42 }}
          />

          <Stack spacing={1}>
            {" "}
            <MainText
              text={
                "We defined the expectations, concerns, and motivations of users. So, we designed a persona to understand how to design a product that will satisfy users' needs and therefore be a success. This was done using the response from the survey we had taken and then we had the persona in mind at every step of the design process: brainstorming, idea prioritization, drafting the product feature list, and user flow till the testing stage."
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Conatainer>
  );
};

export default PersonaGrid;
