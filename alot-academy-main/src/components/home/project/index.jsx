"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Stack, Box, Text, Card, IconButton } from "@/helpers/constants";

import Link from "next/link";
import Image from "next/image";
import ButtonStroke from "@/components/button/ButtonStroke";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { items } from "./data";
import Title from '../../Heading'

const Projects = () => {
 const [activeSlide, setActiveSlide] = useState(0);
 const sliderRef = React.createRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

    return (
      <Stack
        maxWidth="100%"
        mt={{ base: 16, md: 20 }}
      >
        {/* Heading */}
        <Stack
          direction="row"
          justify="space-between"
          align="center"
          maxWidth="100%"
        >
          <Title text="Hands-on Projects" />
          <Stack direction="row" justify="flex-start" align="center">
            <IconButton
              ref={sliderRef}
              onClick={prevSlide}
              borderRadius={0}
              isDisabled={activeSlide === 0}
              icon={<AiOutlineLeft />}
              bg="transparent" // Set the background to transparent
              color={activeSlide === 0 ? "#C5C0DB" : "#F7971D"}
              _hover={{
                boxShadow: "0 0 0 2px #FFD700", // Add a yellow outline on hover
                color: "#F7971D", // Change text color on hover
              }}
              _active={{
                color: "#605DEC",
                boxShadow: "0 0 0 2px #605DEC", // Add a yellow outline on click
              }}
              size="sm"
            />
            <IconButton
              ref={sliderRef}
              onClick={nextSlide}
              isDisabled={activeSlide === items.length - 1}
              icon={<AiOutlineRight />}
              bg={"#FFFFFF"}
              borderRadius={0}
              color={activeSlide === items.length - 1 ? "#C5C0DB" : "#F7971D"}
              _hover={{
                boxShadow: "0 0 0 2px #FFD700", // Add a yellow outline on hover
                color: "#F7971D", // Change text color on hover
              }}
              _active={{
                color: "#605DEC",
                boxShadow: "0 0 0 2px #605DEC", // Add a yellow outline on click
              }}
              size="sm"
            />
          </Stack>
        </Stack>

        {/* Card component */}
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
            <Box key={index}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                justify="center"
                align="center"
                width="100%"
                bg={'transparent'}
              >
                <Box
                  height={{ base: "50%", sm: "100%" }}
                  width={{ base: "100%", sm: "50%" }}
                  maxWidth="100%"
                >
                  <Image
                    style={{ objectFit: "cover" }}
                    height="100%"
                    width="100%"
                    src={item.image}
                    alt={`Slide ${index + 1}`}
                  ></Image>
                </Box>

                <Stack
                  width={{ base: "100%", sm: "50%" }}
                  height={{ base: "50%", sm: "50%" }}
                  justify="center"
                  align="flex-start"
                  spacing={{ base: 5}}
                  mx={{ base: 5, md: 10, lg: 20 }}
                  p={{ base: 5, sm: 0 }}
                  py={{ base: 5, md: 0 }}
                  maxWidth="100%"
                >
                  <Stack justify="flex-start" align="flex-start" spacing="4px">
                    <Text
                      fontFamily="Inter"
                      lineHeight="1.2"
                      fontWeight="bold"
                      fontSize={{ base: "16px", md: 18, lg: 20 }}
                      color="#172D54"
                    >
                      {item.name}
                    </Text>
                    <Stack direction="row" justify="center" align="center">
                      <Image src={item.icon} alt="info-icon" />
                      <Text
                        fontFamily="Inter"
                        lineHeight="1.4"
                        fontWeight="regular"
                        fontSize={{ base: "12px", md: 14, lg: 16 }}
                        color="#C9C8D3"
                      >
                        {item.type}
                      </Text>
                    </Stack>
                  </Stack>
                  <Text
                    fontFamily="Inter"
                    lineHeight="1.2"
                    fontWeight="regular"
                    fontSize={{ base: "12px", md: 14, lg: 16 }}
                    color="#172D54"
                    width="100%" // Adjusted to 100% on small screens
                    maxWidth="100%"
                  >
                    {item.desc}
                  </Text>
                  <ButtonStroke text={item.button} link={item.link} />
                </Stack>
              </Card>
            </Box>
          ))}
        </Slider>
      </Stack>
    );
} 

export default Projects;
