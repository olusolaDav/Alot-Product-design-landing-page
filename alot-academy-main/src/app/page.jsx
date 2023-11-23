"use client"

import { Box, Grid, GridItem, Stack } from "@chakra-ui/react"
import Hero from "@/components/Heros"
import UniqueSellingPoint from "@/components/UniqueSellingPoint"
import AskQustionViaMail from "@/components/AskQustionViaMail"
import Wrapper from "@/components/Wrapper"
import Conatainer from "@/components/Container"
import ProductCard from "@/components/ProductCard"
import { items } from "@/utils/serviceCard"
import VisionMision from '@/components/VisionAndMision'
import Program from "@/components/Program"
import Contact from "@/components/Contact"



const App = () => {
  return (
    <>
      <Wrapper>
        <Hero />
        <UniqueSellingPoint heading="We are an elite education technology start-up born out of a need to provide opportunities for youths to access the digital world." />
        <VisionMision />
        <Program />
        <Conatainer>
          <Stack
            justify="center"
            align="center"
            mt={6}
            spacing={{ base: "32px", md: "64px" }} // Adjust spacing for different screen sizes
          >
            {" "}
            <Grid
              templateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
              }}
              gap={4}
              rowGap={6}
            >
              {items.map((item, index) => (
                <GridItem key={index}>
                  <ProductCard
                    heading={item.heading}
                    body={item.body}
                    href={item.href}
                    buttonText={item.buttonText}
                    display={item.display}
                    isDisabled={item.isDisabled}
                  />
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </Conatainer>

        
      </Wrapper>
<Contact />
    
    </>
  )
}

export default App
