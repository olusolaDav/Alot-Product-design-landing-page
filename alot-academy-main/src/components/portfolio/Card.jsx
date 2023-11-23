'use client'

import {
  Card,
  Stack,
  CardBody,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import MainText from '../MainText'
import SubHeading from '../SubHeading'
import Image from "next/image";
import gotTo from '@/assets/got-to.svg'
import CustomLink from '../CustomLink'
import medi from '@/assets/medi-alert2.svg'
import ButtonFill from "../button/ButtonFill";


export default function PortfolioCard({ isLastCard, heading, body, img, href }) {
  return (
    <Card
      p={0}
      overflow="hidden"
      justify="center"
      align="center"
      maxWidth="300px"
      height={{ base: "370px", md: "450px" }}
      width="100%"
      bg={"white"}
      maxW="md"
      borderRadius={0}
      boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
    >
      <Image
        src={img}
        alt="Chakra UI"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <CardBody px={{ base: 2, md: 4 }}>
        <HStack spacing={4} align={"center"} justify={"center"}>
          <Stack spacing={4}>
            <SubHeading text={heading} />
            <MainText text={body} />
          </Stack>

          <CustomLink href={href}>
            {" "}
            {isLastCard ? ( // Conditionally render Button for the last card
              <ButtonFill text={"Hire Us"} />
            ) : (
              <IconButton
                borderRadius={0}
                icon={<Image src={gotTo} alt="icon" />}
                bg="transparent"
                _hover={{
                  boxShadow: "0 0 0 2px #FFD700",
                  color: "#F7971D",
                }}
                _active={{
                  color: "#605DEC",
                  boxShadow: "0 0 0 2px #605DEC",
                }}
                size="md"
              />
            )}
          </CustomLink>
        </HStack>
      </CardBody>
    </Card>
  );
}
