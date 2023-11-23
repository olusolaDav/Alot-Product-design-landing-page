    "use client"

    import { Stack, UnorderedList, ListItem } from "@chakra-ui/react"
    import Conatainer from "@/components/Container"
    import SubHeading from "@/components/SubHeading"
    import MainText from "@/components/MainText"
    import Image from "next/image"
    import vision from '@/assets/vision.svg'

    const VisionMision = () => {
    const listText = [
        "to be a one-stop destination for all digital solutions. From envisioning stunning brand identity designs to crafting responsive front-end interfaces, robust back-end systems, and cutting-edge mobile applications.",
        "to teach digital skills for youths to secure in-demand jobs and a global technology career through an intensive structured curriculum",
        "offer paid internship opportunities for students to gain industrial experience and work on real-life projects",
        "to empower exceptional youths by offering job opportunities in the tech space",
        "providing job placement support services such as portfolio building, CV/Resume writing, and reviews",
        
    ]
    return (
        <Conatainer>
        <Stack
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
            align="flex-start"
            spacing={{ base: "20px", md: 36 }}
        >
            <Stack
            width={{ base: "100%", sm: "50%" }}
            paddingTop="0px"
            paddingBottom={{ base: "16px", sm: "8px" }}
            justify={{ base: "center", sm: "flex-start" }}
            align={{ base: "center", sm: "flex-start" }}
            spacing={{ base: "16px", md: 8 }}
            >
            <Image
                src={vision}
                alt="vision and mission"
                style={{ width: "100%", height: "auto" }}
            />
            </Stack>

            <Stack
            width={{ base: "100%", sm: "50%" }}
            paddingTop="0px"
            justify={{ base: "center", sm: "flex-start" }}
            align={{ base: "center", sm: "flex-start" }}
            spacing={{ base: "16px", md: 8 }}
            >
            <SubHeading
                text={"Our Vision"}
                fontSize={{ base: 24, md: 30, lg: 42 }}
            />
            <MainText
                text={
                "To produce job-ready youths that can meet the requirements of the digital world."
                }
            />
            <Stack spacing={1}>
                <SubHeading
                text={"Our Mission"}
                fontSize={{ base: 24, md: 30, lg: 42 }}
                />{" "}
                <UnorderedList>
                {listText.map((text, index) => (
                    <ListItem key={index}>{text}</ListItem>
                ))}
                </UnorderedList>
            </Stack>
            </Stack>
        </Stack>
        </Conatainer>
    )
    }

    export default VisionMision
