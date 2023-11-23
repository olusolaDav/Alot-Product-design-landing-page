'use client'
import { Box, VStack } from "@chakra-ui/react";
import Title from '../../Heading'
import Card from "./Card";
import Conatainer from "@/components/Container";

export default function Offers({cards}) {

  return (

    <Conatainer
      maxWidth="100%"
      
    >
      <Box mb={8} align='center'>
        <Title text="What We’re Offering" />
      </Box>

      <VStack maxWidth="100%" spacing={{ base: 2, sm: 4, md: 6 }}>
        {cards.map((item, index) => {
          return (
            <Box key={index}>
              <Card heading={item.heading} body={item.body} img={item.img} />
            </Box>
          );
        })}
      </VStack>
    </Conatainer>
  );
}
