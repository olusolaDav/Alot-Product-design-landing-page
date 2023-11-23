"use client";
export {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Stack,
  Card,
  IconButton,
  Center,
  Circle,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Heading,
  Divider,
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
} from "@chakra-ui/react";

export { Link } from "@chakra-ui/next-js";

export const links = [
  { link: "Home", href: "/" },
  { link: "Alot Internship", href: "https://internship.alotacademy.com" },
  { link: "Alot Digital Solutions", href: "https://solutions.alotacademy.com" },
]


export const footLinks = {
  link1: [
    { link: "Home", href: "/" },
    { link: "Alot Internship", href: "https://internship.alotacademy.com" },
    {
      link: "Alot Digital Solutions",
      href: "https://solutions.alotacademy.com",
    },
    { link: "Contact Us", href: "/contact-us" },
   
  ],
  link2: [
    { link: "About Us", href: "/about-us" },
    { link: "Blog", href: "/blog" },
    { link: "Hire Us", href: "/hire-us" },
    { link: "Contact Us", href: "/contact-us" },
    { link: "Join Team", href: "/join-us" },
  ],
}