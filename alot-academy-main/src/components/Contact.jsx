"use client"

import { useState } from "react"
import { Stack, UnorderedList, ListItem, Box, Text } from "@chakra-ui/react"
import Conatainer from "@/components/Container"
import SubHeading from "@/components/SubHeading"
import MainText from "@/components/MainText"
import Image from "next/image"
import Wrapper from './Wrapper'
import FormTemplate from "@/builder/form/Template"
import contact from "@/assets/contact.svg"
import CustomAlert from "@/components/CustomAlert"
import steps from "@/utils/contactUs"


const Contact = () => {
     const [isSubmitting, setIsSubmitting] = useState(false)
     const [submissionError, setSubmissionError] = useState(null)
     const [submissionData, setSubmissionData] = useState(null)
     const [step, setStep] = useState(0)
     const currentStep = steps[step]
  return (
    <Box background="linear-gradient(45deg, #1f141a 0%, #474b6d 100%)" py={6}>
      <Conatainer>
        <Wrapper>
          <Text
            color="white"
            fontSize={{ base: 18, sm: 24, md: 32 }}
            maxWidth={200}
            fontWeight={"bold"}
          >
            Contact Us
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            spacing={{ base: "20px", md: 36 }}
          >
            <Stack
              width={{ base: "100%", md: "50%" }}
              paddingTop="0px"
              paddingBottom={{ base: "16px", sm: "8px" }}
              justify={{ base: "center", md: "flex-start" }}
              align={{ base: "center", md: "flex-start" }}
              spacing={{ base: "16px", md: 8 }}
            >
              <Image
                src={contact}
                alt="vision and mission"
                style={{ width: "100%", height: "auto" }}
              />
            </Stack>

            <Stack
              width={{ base: "100%", md: "50%" }}
              paddingTop="0px"
              justify={{ base: "center", md: "flex-start" }}
              align={{ base: "center", md: "flex-start" }}
              spacing={{ base: "16px", md: 8 }}
            >
              <FormTemplate
                fields={currentStep}
                currentStep={step}
                step={step}
                steps={steps}
                setStep={setStep}
              />
              {submissionError && (
                <CustomAlert
                  status="error"
                  autoClose={true}
                  onClose={handleAlertClose}
                >
                  {submissionError}
                </CustomAlert>
              )}
              {submissionData && (
                <CustomAlert
                  status="success"
                  autoClose={true}
                  onClose={handleAlertClose}
                >
                  {submissionData}
                </CustomAlert>
              )}
            </Stack>
          </Stack>
        </Wrapper>
      </Conatainer>
    </Box>
  )
}

export default Contact
