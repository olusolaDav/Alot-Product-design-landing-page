"use client"

import { Stack, UnorderedList, ListItem } from "@chakra-ui/react"
import Conatainer from "@/components/Container"
import SubHeading from "@/components/SubHeading"
import MainText from "@/components/MainText"
import Image from "next/image"
import program from "@/assets/program.svg"

const Program = () => {
  const listText = [
    "Alot Digital Skills,",
    "Alot Internship, ",
    "Alot Career Support, and ",
    "Alot Digital Solutions.",
  ]
  return (
    <Conatainer>
      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
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
              text={"Our Programs"}
              fontSize={{ base: 24, md: 30, lg: 42 }}
            />
            <MainText
              text={
                "Alot Academy has various programs that youths can participate in to access limitless possibilities in the Digital world. "
              }
            />
            <UnorderedList>
              {listText.map((text, index) => (
                <ListItem key={index}>{text}</ListItem>
              ))}
            </UnorderedList>
            <MainText
              text={
                "The academy is established to bring the best out of youths to become highly skilled professionals by exposing them to intensive practical learning, collaborative learning, real-life projects, internship placements, and Career Support."
              }
            />
    
        </Stack>

        <Stack
          width={{ base: "100%", sm: "50%" }}
          paddingTop="0px"
          paddingBottom={{ base: "16px", sm: "8px" }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
          spacing={{ base: "16px", md: 8 }}
        >
          <Image
            src={program}
            alt="vision and mission"
            style={{ width: "100%", height: "auto" }}
          />
        </Stack>
      </Stack>
    </Conatainer>
  )
}

export default Program
