"use client";
import { Text } from "@/helpers/constants";

export default function MainText({ text, ...otherProps }) {
  return (
    <Text
      fontFamily="Inter"
      lineHeight="1.4"
      fontWeight="regular"
      fontSize={{ base: "12px", md: 14, lg: 16 }}
      color="#172D54"
      align={{ base: "center", sm: "left" }}
      {...otherProps}
    >
      {text}
    </Text>
  );
}
