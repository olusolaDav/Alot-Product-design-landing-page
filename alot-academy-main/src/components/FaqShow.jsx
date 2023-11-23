
"use client";
import Image from "next/image";
import plusshow from "@/assets/plus.svg";
import minushidden from "@/assets/minus.svg";
import { useCollapse } from "react-collapsed";
import { useState } from "react";
import { Box, Text, HStack, Circle } from "@/helpers/constants";
import MainText from "./MainText";

const FaqShow = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      {" "}
      <HStack
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        spacing={-14}
        cursor={"pointer"}
        align={"center"}
        w="full"
        //className="flex justify-between items-center bg-white-A700 mb-8 py-6 px-8 rounded cursor-pointer"
      >
        <Box
          bg={"white"}
          py={4}
          px={2}
          zIndex={2}
          boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
          maxW="100%"
          w="90%"
        >
          <Text
            fontFamily="Inter"
            lineHeight="1.4"
            fontWeight="bold"
            fontSize={{ base: 12, md: 14, lg: 16 }}
            color="rgba(23, 45, 84, 0.961)"
          >
            {props.title}
          </Text>
        </Box>

        <Circle
          boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
          size={"40px"}
          bg={"white"}
          color="secondary"
        >
          <Image src={isExpanded ? minushidden : plusshow} alt="show" />
        </Circle>
      </HStack>
      <HStack {...getCollapseProps()}>
        <Box bg={"#E5E4EE"} mt={-4} p={4} w="90%">
          <Text fontSize={{ base: "12px", md: 14, lg: 16 }}>
            {" "}
            {props.children}
          </Text>
        </Box>
        
      </HStack>
    </>
  );
};

export default FaqShow;


