"use client";
import { Stack, VStack, Text, Box } from "@/helpers/constants";
import ButtonFill from "./button/ButtonFill";
import CustomLink from "@/components/CustomLink";
import { AiOutlineMail } from "react-icons/ai";
export default function AskQustionViaMail() {
  return (
    <Box
      paddingX={{ base: "32px", md: "64px" }}
      mt={{ base: 30, md: 36 }}
      maxWidth="100%"
    >
      <Stack
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
        bg={"secondaryGradient"}
        p={4}
      >
        <VStack
          spacing={4}
          textAlign={{ base: "center", sm: "left" }}
          justify={{ base: "center", sm: "flex-start" }}
          align={{ base: "center", sm: "flex-start" }}
        >
          <Text
            lineHeight="1.2"
            fontWeight="bold"
            fontSize={{ base: 14, sm: 16, md: 18, lg: 24 }}
            color="white"
            textAlign={{ base: "center", sm: "left" }}
          >
            Do you still have questions?
          </Text>
          <Text
            lineHeight="1.2"
            fontSize={{ base: 12, sm: 14, md: 16 }}
            color="white"
            textAlign={{ base: "center", sm: "left" }}
            align={{ base: "center", sm: "left" }}
          >
            If you still have further questions, you can send us an email.
          </Text>
        </VStack>
        <CustomLink href={"mailto:example@example.com"}>
          {" "}
          <ButtonFill
            text="Send a Mail"
            leftIcon={<AiOutlineMail />}
            size="md"
          />
        </CustomLink>
      </Stack>
    </Box>
  );
}
