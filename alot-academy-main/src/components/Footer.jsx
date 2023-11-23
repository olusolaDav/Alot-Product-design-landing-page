"use client";
import {
  Box,
  Stack,
  VStack,
  HStack,
  Text,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  InputRightAddon,
  GridItem,
  Divider,
} from "@/helpers/constants";
import Image from "next/image";
import SubHeading from "./SubHeading";
import call from "@/assets/call.svg";
import mail from "@/assets/mail.svg";
import linkedin from "@/assets/linkedin.svg";
import twitter from "@/assets/twitter.svg";
import instagram from "@/assets/instagram.svg";
import facebook from "@/assets/facebook.svg";
import mailBlue from "@/assets/mail-blue.svg";
import brandLogo from "@/assets/Alot-logo.svg";
import MainText from "./MainText";
import CustomLink from "@/components/CustomLink";
import LinkButton from "./button/LinkButton";
import { links, footLinks } from "@/helpers/constants";
import { AiOutlineMail } from "react-icons/ai";


export default function Footer() {
  return (
    <Box
      paddingX={{ base: "16px", sm: "32px", md: "64px", xl: "120px" }}
      mt={{ base: 16, md: 20 }}
      maxWidth="100%"
    >
      <VStack
        overflow="hidden"
        width="100%"
        spacing={{ base: 4, sm: 6, md: 8 }}
        align={{ base: "center", sm: "flex-start" }}
      >
        {/* Image section */}
        <CustomLink href="/">
          <Image src={brandLogo} alt="Alot Academy Logo" width={100} />
        </CustomLink>

        {/* The footer main section */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          width="100%"
          spacing={{ base: 8, md: 6 }}
        >
          {/* Left Coloumn */}
          <VStack
            width={{ base: "100%", sm: "50%" }}
            maxWidth="100%"
            spacing={{ base: 6 }}
            justify={{ base: "center", sm: "flex-start" }}
            align={{ base: "center", sm: "flex-start" }}
          >
            <MainText text="Alot Project Team is a one-stop destination for all things digital. From envisioning stunning product designs (including designing brand identity) to crafting responsive front-end interfaces, robust back-end systems, and cutting-edge mobile applications, we have the expertise to make your vision a reality." />

            {/* Links */}
            <Stack
              direction={{ base: "row", md: "coloumn" }}
              spacing={{ base: 12 }}
              align={{ base: "flex-start" }}
            >
           

              <VStack align={{ base: "center", sm: "flex-start" }}>
                {" "}
                <SubHeading text={"Links"} />
                <HStack
                  spacing={3}
                  align={{ base: "center", sm: "flex-start" }}
                >
                  {footLinks.link1.map((item, index) => (
                    <CustomLink key={index} href={item.href}>
                      <LinkButton text={item.link} />{" "}
                    </CustomLink>
                  ))}
                </HStack>
              </VStack>
              {/* 
              <VStack align={"flex-start"}>
                {" "}
                <SubHeading text={"Contacts"} />
                <VStack spacing={1} align={"flex-start"}>
                  <HStack spacing={{ base: 2 }} align={"center"}>
                    {" "}
                    <Image src={call} alt="Call Icon" />{" "}
                    <MainText text={"+2348112181442"} />{" "}
                  </HStack>

                  <CustomLink href="mailto:alotacademy@gmail.com">
                    {" "}
                    <HStack spacing={{ base: 2 }} align={"center"}>
                      {" "}
                      <Image src={mail} alt="Mail" />{" "}
                      <MainText text={"alotacademy@gmail.com"} />{" "}
                    </HStack>
                  </CustomLink>
                </VStack>
              </VStack> */}
            </Stack>

            {/* Contacts */}
            <VStack
              spacing={{ base: 2, md: 4 }}
              align={{ base: "center", sm: "flex-start" }}
            >
              <SubHeading text={"Contacts"} />
              <Stack
                direction={{ base: "column", md: "row" }}
                width="100%"
                spacing={{ base: 2, sm: 4, md: 6 }}
              >
                <HStack spacing={{ base: 2 }} align={"center"}>
                  {" "}
                  <Image src={call} alt="Call Icon" />{" "}
                  <MainText text={"+2348112181442"} />{" "}
                </HStack>

                <CustomLink href="mailto:alotacademy@gmail.com">
                  {" "}
                  <HStack spacing={{ base: 2 }} align={"center"}>
                    {" "}
                    <Image src={mail} alt="Mail" />{" "}
                    <MainText text={"alotacademy@gmail.com"} />{" "}
                  </HStack>
                </CustomLink>
              </Stack>
            </VStack>
          </VStack>

          {/* Right Column */}
          <VStack
            width={{ base: "100%", sm: "50%" }}
            maxWidth="100%"
            spacing={{ base: 6 }}
            justify={{ base: "center", sm: "flex-start" }}
            align={{ base: "center", sm: "flex-start" }}
          >
            <SubHeading text="Join our newsletter to stay up to date." />
            <InputGroup borderRadius={0} color={"primary"}>
              <InputLeftElement pointerEvents="none">
                <AiOutlineMail color="primary" />
              </InputLeftElement>
              <Input
                type="text"
                fontSize={12}
                color={"secondary"}
                borderRadius={0}
                placeholder="Enter your Email"
              />
              <InputRightAddon
                borderRadius={0}
                color={"white"}
                type="submit"
                bg={"primary"}
                _focus={{ borderColor: "primary" }}
                cursor={"pointer"}
                fontSize={12}
              >
                Subscribe
              </InputRightAddon>
            </InputGroup>

            <MainText
              text={
                "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company."
              }
            />

            {/* Social Media  */}
            <VStack
              spacing={{ base: 2, md: 4 }}
              align={{ base: "center", sm: "flex-start" }}
            >
              <SubHeading text={"Follow us on"} />

              <HStack spacing={{ base: 4 }} align={"center"}>
                {" "}
                <CustomLink
                  href={"https://www.linkedin.com/company/alotacademy/"}
                >
                  {" "}
                  <Image src={linkedin} alt="Linkedin" width={25} />{" "}
                </CustomLink>
                <CustomLink href={"https://twitter.com/alotacademy"}>
                  {" "}
                  <Image src={twitter} alt="twitter" width={25} />{" "}
                </CustomLink>{" "}
                <CustomLink href={"https://www.instagram.com/alotacademy/"}>
                  {" "}
                  <Image src={instagram} alt="insgram" width={25} />{" "}
                </CustomLink>{" "}
                <CustomLink href={"item.href"}>
                  {" "}
                  <Image src={facebook} alt="facebook" width={25} />{" "}
                </CustomLink>
              </HStack>
            </VStack>
          </VStack>
        </Stack>
      </VStack>

      <Divider size="4px" my={6} colorScheme="blue" color={"secondary"} />

      <Stack
        align={{ base: "center", sm: "flex-start" }}
        direction={{ base: "column", sm: "row" }}
        justify={"space-between"}
        mb={8}
      >
        <Text fontSize={{ base: 8, sm: 10 }}>
          Designed by Alot Project Team.{" "}
        </Text>
        <Text fontSize={{ base: 8, sm: 10 }}>
          2023 Copyright Alot Academy. All right reserved
        </Text>
      </Stack>
    </Box>
  );
}
