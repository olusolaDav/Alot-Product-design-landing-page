
import { Box, Button, Text } from "@/helpers/constants";
import { useRouter } from "next/navigation";

const ButtonStroke = (
  { text, link, size = "sm", display = "block" },
  hoverColor = "#F6F5FF",
  borderColor= "#FFD700",
  isDisabled = false
) => {
  const router = useRouter()
  return (
    <Box>
      <Button
        variant="outline"
        size={size}
        borderRadius={0}
        isDisabled={isDisabled}
        display={display}
        color={"#F7971D"}
        _hover={{ bg: { hoverColor }, borderColor: { borderColor } }}
        onClick={() => router.push(`/${link}`)}
      >
        <Text
          fontFamily="Inter"
          lineHeight="1.2"
          fontWeight="regular"
          fontSize={{ base: 12, md: 14, lg: 16 }}
          color="Button.Primary/Text_Hover"
          textAlign="center"
        >
          {text}
        </Text>
      </Button>
    </Box>
  )
}

export default ButtonStroke;
