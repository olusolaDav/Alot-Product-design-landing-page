"use client";
import { Heading } from "@/helpers/constants";

export default function SubHeading({ text, fontSize= { base: 14, md: 16, lg: 18 } }, color='#F7971D') {
  return (
    <Heading
      as="h2"
      fontSize={fontSize}
      align={{ base: "center", sm: "flex-start" }}
    color={color}
    >
      {text}
    </Heading>
  );
}
