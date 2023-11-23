/* eslint-disable react/no-unescaped-entities */
import { Stack, Text, Box, Tab, Container } from "@chakra-ui/react";
import technology from "@/assets/technology.svg";
import cycle from "@/assets/cycle.svg";
import badge from "@/assets/badge.svg";
import Image from "next/image";

const App = () => {
  return (
    <Container maxW={"7xl"} centerContent>
      <Stack
        justify="flex-start"
        align="center"
        spacing={{ base: "16px", md: "32px" }} // Adjust spacing for different screen sizes
      >
        <Text
          fontFamily="Inter"
          lineHeight="1.2"
          fontWeight="bold"
          fontSize={{ base: "32px", md: "48px" }} // Adjust font size for different screen sizes
          color="#172D54"
        >
          Our Core Values
        </Text>
        <Stack
          paddingX={{ base: "16px", md: "64px" }} // Adjust padding for different screen sizes
          justify="center" // Center elements horizontally on smaller screens
          align="flex-start"
          spacing={{ base: "16px", md: "32px" }} // Adjust spacing for different screen sizes
        >
          <Stack
            direction={{ base: "column", md: "row" }} // Adjust direction for different screen sizes
            justify="center" // Center elements horizontally on smaller screens
            align="center" // Center elements vertically on smaller screens
            spacing="16px"
          >
            {/* Core Value 1 */}
            <Stack
              padding={{ base: "16px", md: "32px" }} // Adjust padding for different screen sizes
              justify="center" // Center elements horizontally on smaller screens
              align="center" // Center elements vertically on smaller screens
              spacing="16px"
              width={{ base: "100%", md: "300px" }} // Adjust width for different screen sizes
              maxWidth="100%"
              background="#FFFFFF"
              boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
            >
              <Stack
                justify="center" // Center elements horizontally on smaller screens
                align="center" // Center elements vertically on smaller screens
                spacing="16px"
              >
                <Image src={cycle} alt="tecnology" height="100" />
                {/* <Box width="100px" height="100px" bg="#f4f4f4" />{" "} */}
                {/* Add a background color for illustrations */}
                <Text
                  fontFamily="Inter"
                  lineHeight="1.2"
                  fontWeight="bold"
                  fontSize={{ base: "24px", md: "32px" }} // Adjust font size for different screen sizes
                  color="rgba(23, 45, 84, 0.961)"
                  width="100%"
                  maxWidth="100%"
                  textAlign="center"
                >
                  Comprehensive Solutions
                </Text>
                <Text
                  fontFamily="Inter"
                  lineHeight="1.4"
                  fontWeight="regular"
                  fontSize="16px"
                  color="rgba(23, 45, 84, 0.961)"
                  width="100%"
                  maxWidth="100%"
                  textAlign="center"
                >
                  We offer a complete suite of services under one roof. Whether
                  you're starting from scratch or enhancing an existing project,
                  we've got you covered from concept to deployment.
                </Text>
              </Stack>
            </Stack>

            {/* Core Value 2 */}
            <Stack
              padding={{ base: "16px", md: "32px" }} // Adjust padding for different screen sizes
              justify="center" // Center elements horizontally on smaller screens
              align="center" // Center elements vertically on smaller screens
              spacing="16px"
              width={{ base: "100%", md: "300px" }} // Adjust width for different screen sizes
              maxWidth="100%"
              background="#FFFFFF"
              boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
            >
              <Stack
                justify="center" // Center elements horizontally on smaller screens
                align="center" // Center elements vertically on smaller screens
                spacing="16px"
              >
                <Image src={technology} alt="tecnology" height="100" />{" "}
                {/* Add a background color for illustrations */}
                <Text
                  fontFamily="Inter"
                  lineHeight="1.2"
                  fontWeight="bold"
                  fontSize={{ base: "24px", md: "32px" }} // Adjust font size for different screen sizes
                  color="rgba(23, 45, 84, 0.961)"
                  width="100%"
                  maxWidth="100%"
                  textAlign="center"
                >
                  Technology Agnostic
                </Text>
                <Text
                  fontFamily="Inter"
                  lineHeight="1.4"
                  fontWeight="regular"
                  fontSize="16px"
                  color="rgba(23, 45, 84, 0.961)"
                  width="100%"
                  maxWidth="100%"
                  textAlign="center"
                >
                  We're not limited to a single technology stack. We leverage
                  the best tools and languages to suit your project's needs.
                </Text>
              </Stack>
            </Stack>

            {/* Core Value 3 */}
            <Stack
              padding={{ base: "16px", md: "32px" }} // Adjust padding for different screen sizes
              justify="center" // Center elements horizontally on smaller screens
              align="center" // Center elements vertically on smaller screens
              spacing="16px"
              width={{ base: "100%", md: "300px" }} // Adjust width for different screen sizes
              maxWidth="100%"
              background="#FFFFFF"
              boxShadow="0px 16px 24px 0px rgba(142, 141, 208, 0.12)"
            >
              <Stack
                justify="center" // Center elements horizontally on smaller screens
                align="center" // Center elements vertically on smaller screens
                spacing="16px"
              >
                <Image src={badge} alt="tecnology" height="100" />
                {/* Add a background color for illustrations */}
                <Text
                  fontFamily="Inter"
                  lineHeight="1.2"
                  fontWeight="bold"
                  fontSize={{ base: "24px", md: "32px" }} // Adjust font size for different screen sizes
                  color="rgba(23, 45, 84, 0.961)"
                  width="100%"
                  maxWidth="100%"
                  textAlign="center"
                >
                  Quality Assurance
                </Text>
                <Text
                  fontFamily="Inter"
                  lineHeight="1.4"
                  fontWeight="regular"
                  fontSize="16px"
                  color="rgba(23, 45, 84, 0.961)"
                  width="100%"
                  maxWidth="100%"
                  textAlign="center"
                >
                  We meticulously test and quality-assure every project to
                  guarantee reliability and minimize post-launch issues.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          paddingX={{ base: "16px", md: "48px" }} // Adjust padding for different screen sizes
          justify="flex-start"
          align="flex-start"
          spacing="16px"
        >
          <Stack
            paddingX="16px"
            direction="row"
            justify="center"
            align="center"
            spacing="4px"
          >
            <Text
              fontFamily="Inter"
              lineHeight="1.2"
              fontWeight="regular"
              fontSize="18px"
              textTransform="capitalize"
              color="#172D54"
              textAlign="center"
            >
              View All
            </Text>
          </Stack>
          <span className="unsupported" />
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;
