"use client";
import { Box, Button, Text } from "@/helpers/constants";
import { useRouter } from "next/navigation";

const ButtonFill = ({
  text,
  link,
  size = "sm",
  leftIcon,
  borderColor="#F7971D",
  rightIcon,
  hoverBorderColor= "#FFD700",
  bg = '#F7971D',
  display= "block",
  isDisabled= false
}) => {
  const router = useRouter();
  return (
    <Box>
      <Button
        size={size}
        display={display}
        bg={bg}
        w={'full'}
        border={"2px"}
        borderColor={borderColor}
        isDisabled={isDisabled}
        borderRadius={0}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        _hover={{ borderColor: hoverBorderColor }}
        onClick={() => router.push(`/${link}`)}
      >
        <Text
          fontFamily="Inter"
          fontWeight="regular"
          fontSize={{ base: 12, md: 14, lg: 16 }}
          color="Button.Primary/Text_Hover"
        >
          {text}
        </Text>
      </Button>
    </Box>
  )
};

export default ButtonFill;
