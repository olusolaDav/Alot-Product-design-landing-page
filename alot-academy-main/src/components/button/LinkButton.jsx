"use client";
import { Box, Button, Text } from "@/helpers/constants";

const LinkButton = ({
  text,
  size = "sm",
  leftIcon,
  rightIcon,
  fontSize={ base: 10, sm: 12 },
  borderColor = "transparent",
}) => {
  return (
    <>
      <Button
        size={size}
        variant={"link"}
        borderBottom={"2px"}
        borderColor={borderColor}
        borderRadius={0}
        pb={1}
        bg={"transparent"}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        _hover={{ borderColor: "primary" }}
        _active={{ borderColor: "primary" }}
      >
        <Text
          fontFamily="Inter"
          fontWeight="regular"
          fontSize={fontSize}
          color="Button.Primary/Text_Hover"
        >
          {text}
        </Text>
      </Button>
    </>
  );
};

export default LinkButton;
