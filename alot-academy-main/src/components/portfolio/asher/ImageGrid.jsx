"use client";

import { Stack, Box, Grid, GridItem } from "@/helpers/constants";
import Conatainer from "@/components/Container";
import billboard from "@/assets/asher-billboard-mockup.svg";
import paperBag from "@/assets/Asher-Paper-Bag-Mockup.svg";
import businssCard from "@/assets/Asher-Business-Card-Mockup.svg";
import beansPowder from "@/assets/asher-beans-powder.svg";
import mugCup from "@/assets/Asher-Mug-Cup-Mockup.svg";
import Image from "next/image";

export const images = [paperBag, businssCard, beansPowder, mugCup];

const ImageGrid = () => {
  return (
    <Conatainer>
      <Stack justify="center" align="center">
        <Grid
          templateRows={"repeat(4, 1fr)"}
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
          gap={4}
        >
          <GridItem rowSpan={{ base: 1, sm: 2 }} colSpan={{ base: 1, sm: 2 } }>
            <Image src={billboard} alt="asher billboard" />
          </GridItem>
          {images.map((img, index) => (
            <GridItem key={index}>
              <Image src={img} alt="asher branding" />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Conatainer>
  );
};

export default ImageGrid;
