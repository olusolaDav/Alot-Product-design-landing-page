"use client";
import { Heading } from "@/helpers/constants";

const Title = ({ text }) => {
  return (
    <Heading as="h2" color="#172D54" fontSize={{ base: 20, sm: 30, md: 48 }}>
      {text}
    </Heading>
  );
};

export default Title;
