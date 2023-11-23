"use client";
import { Box, HStack,Text, Stack } from "@chakra-ui/react";

import Carousel from  '../../carousel'
import {items} from './data'


export default function Sectors() {
  return (
    <Box
      mt={{ base: 16, md: 20 }}
      maxWidth="100%"
      align={"center"}
      pr={0}
    >
      <HStack
        direction={"row"}
        overflow="hidden"
        width="100%"
        align={{ base: "center" }}
        justify={"center"}
        mb={"6"}
      >
        <Stack
          width={{ base: "40%", sm: "30%", lg: "20%" }}
          maxWidth="100%"
          align={"flex-start"}
          justify={"center"}
        >
          <Text fontSize={{ base: 12, sm: 16, md: 20 }}>Sectors our</Text>

          <HStack>
            {" "}
            <Text
              as="u"
              fontSize={{ base: 12, sm: 16, md: 20 }}
              textDecorationColor="primary"
              pb={4}
            >
              Team
            </Text>
            <Text fontSize={{ base: 12, sm: 16, md: 20 }} pb={4}>
              work in
            </Text>
          </HStack>
        </Stack>

        <Box
          width={{ base: "60%", sm: "70%", lg: "80%" }}
          maxWidth="100%"
          mt={{ base: 2, sm: 0 }}
        align="center"
        justify="center"
        >
          <Carousel icons={items} />
        </Box>
      </HStack>
    </Box>
  );
}
