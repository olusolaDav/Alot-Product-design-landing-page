"use client";

import { Stack } from "@/helpers/constants";
import Conatainer from "@/components/Container";
import SubHeading from "@/components/SubHeading";
import MainText from "@/components/MainText";


const TextGrid = () => {
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
            text={"Problem Statement"}
            fontSize={{ base: 24, md: 30, lg: 42 }}
          />

          <Stack spacing={1}>
            {" "}
            <MainText
              text={
                "During the COVID-19 pandemic, it became more obvious that Nigeria's health industry does not have the ability to effectively adapt and respond to a health emergency. Many have died due to the fact that they couldn't get to a medical center on time, contact an ambulance, or get some medical instructions they could follow pending the time the medical team arrives during an emergency situation."
              }
            />
            <MainText
              text={
                "Our client wanted a digital solution that can help unwell Nigerians to get medical care in emergency situations."
              }
            />
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
            text={"Research"}
            fontSize={{ base: 24, md: 30, lg: 42 }}
          />

          <Stack spacing={1}>
            {" "}
            <MainText
              text={
                "Firstly, we started by drawing a research plan. We defined our research objectives and method. Using a Knowledge board, the team made some assumptions about the Nigerian health sector and conducted desk research to get facts, then we moved on to drafting our research questions. The questions were structured to know the user's pain points, goals, needs, experiences, behaviors, and workable solutions to the stated problem. Our goal was to solve the problem based on the user's responses."
              }
            />
            <MainText
              text={
                "We drafted an online open-ended and Closed-ended survey on Google Forms and shared it with people on various platforms."
              }
            />
          </Stack>
        </Stack>
      </Stack>
    </Conatainer>
  );
};

export default TextGrid;
 