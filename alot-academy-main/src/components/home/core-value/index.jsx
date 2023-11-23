/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Stack,
  Text,
  Box,
} from "@/helpers/constants";

import GridTemplate from "../../GridTemplate";
import items from "./data";
import Title from "@/components/Heading";
import CustomLink from "@/components/CustomLink";
import LinkButton from "@/components/button/LinkButton";


const CoreValue = () => {
  return (
    <Box
      mt={{ base: 26, md: 32 }}
      maxWidth="100%"
    >
      <Stack
        justify="flex-start"
        align="center"
        spacing={{ base: "16px", md: "32px" }} // Adjust spacing for different screen sizes
      >
        <Title text="Our Core Value" />

        <GridTemplate items={items} />
        <CustomLink  href={'/portfolio'}>
                  <LinkButton text={'View All'} fontSize={{ base: 12, sm: 16} }/>
                </CustomLink>
       
      </Stack>
    </Box>
  );
};

export default CoreValue;
