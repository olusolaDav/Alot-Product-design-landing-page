"use client"

import { Card, Stack, CardBody, VStack, IconButton, Text, Box, Button } from "@chakra-ui/react"
import MainText from "./MainText"
import CustomLink from "./CustomLink"
import ButtonFill from "./button/ButtonFill"




export default function ProductCard({
  isLastCard,
  heading,
  body,
  img,
  buttonText,
  display,
  isDisabled,
  href,
}) {
  return (
    <Card
      p={0}
      overflow="hidden"
      justify="center"
      align="center"
      maxWidth="300px"
      height={{ base: "430px", md: "450px" }}
      width="100%"
      bg={"white"}
      maxW="md"
      borderRadius={0}
      boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
    >
      <Stack w="full" align={"flex-start"} position={"relative"}>
        <Box
          w="full"
          justify={"center"}
          background="linear-gradient(45deg, #1f141a 0%, #474b6d 100%)"
        height={{ base: "170px"}}
          p={6}
        >
          {" "}
          <Text
            color="white"
            fontSize={{ base: 18, sm: 24, md: 32 }}
            maxWidth={200}
            fontWeight={"bold"}
          >
            {heading}
          </Text>
        </Box>
        <Box
          position="absolute"
          bottom={{ base: 2, sm: 4 }}
          right={"2"}
          display={display}
        >
          <Button
            variant={"outline"}
            color={"primary"}
            borderColor={"primary"}
            borderRadius={0}
            border="2px"
            fontFamily={"Inter"}
            size={{base: "xsm", sm: "sm"}}
            isDisabled={true}
          >
            <Text fontSize={10}>UPCOMING</Text>{" "}
          </Button>{" "}
          {/* //  <Image src={upcoming} alt="Upcoming" style={{ height: "auto", width: "50%" }} /> */}
        </Box>{" "}
      </Stack>
      <CardBody px={{ base: 2, md: 4 }}>
        <VStack spacing={4} align={"center"} justify={"center"}>
          <Stack spacing={4}>
            <MainText text={body} />
          </Stack>

          <CustomLink href={href}>
            <Box
              position={"absolute"}
              bottom={"20px"}
              right={"20px"}
              left={"20px"}
            >
              {" "}
              <ButtonFill
                isDisabled={isDisabled}
                size="md"
                w="full"
                text={buttonText}
              />
            </Box>
          </CustomLink>
        </VStack>
      </CardBody>
    </Card>
  )
}
