"use client";
import {
  Stack,
  Box,
  Text,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  CloseButton,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@/helpers/constants";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import alotLogo from "@/assets/Alot-logo.svg";
import Image from "next/image";
import ButtonFill from "./button/ButtonFill";
import CustomLink from "./CustomLink";
import LinkButton from "./button/LinkButton";
import { links } from "@/helpers/constants";



const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      direction="row"
      justify="space-between"
      align="center"
      spacing="0px"
      bg={"white"}
      boxShadow="md"
      px={{ base: "16px", sm: "32px", md: "64px", xl: "120px" }}
      py={4}
      pos="sticky"
      top="0"
      left="0"
      zIndex={90}
    >
      <Box>
        <CustomLink href="/">
          <Image
            src={alotLogo}
            alt="Alot Academy Logo"
            width={80}
            height={80}
          />
        </CustomLink>
      </Box>
      <Box display={{ base: "block", sm: "none" }} onClick={onOpen}>
        <HamburgerIcon w={6} h={6} />
      </Box>
      <Stack
        display={{ base: "none", sm: "flex" }}
        direction="row"
        spacing={{ base: 2, md: 6 }}
        justify="center"
        align="center"
        cursor={"pointer"}
      >
        {links.map((item, index) => (
          <Box key={index}>
            <CustomLink href={item.href}>
              <LinkButton text={item.link} size="lg" />
            </CustomLink>
          </Box>
        ))}
        {/* Add other tabs here */}
      </Stack>
      <Box display={{ base: "none", sm: "flex" }}>
        {" "}
        <ButtonFill
          text="Contact Us"
          link="contact-us"
          size="md"
          borderColor="secondary"
          bg={"secondary"}
          hoverBorderColor="primary"
        />{" "}
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent w={"70%"}>
          <DrawerHeader display="flex" justifyContent="space-between">
            <CloseButton onClick={onClose} />
            <Box justify="center" align="center">
              <CustomLink href={"/"}>
                <Image src={alotLogo} alt="Alot Academy" width={100} />
              </CustomLink>
            </Box>
            <Box></Box>
          </DrawerHeader>
          <DrawerBody>
            {/* Put your navigation links or content here */}
            <VStack
              spacing={4}
              justify="center"
              align="center"
              cursor={"pointer"}
            >
              {links.map((item, index) => (
                <Box key={index}>
                  <CustomLink href={item.href}>
                    <LinkButton text={item.link} size="lg" />
                  </CustomLink>
                </Box>
              ))}
              <ButtonFill
                text="Contact Us"
                link="contact-us"
                size="md"
                borderColor="secondary"
                bg={"secondary"}
                hoverBorderColor="primary"
              />{" "}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
};

export default NavBar;
