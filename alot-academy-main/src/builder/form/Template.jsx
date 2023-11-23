// FormTemplate.js

"use client"

import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Flex,
  Text,
  Grid,
  GridItem,
  FormErrorMessage,
  Stack,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import ButtonFill from "@/components/button/ButtonFill"
import axios from "axios"

function FormTemplate(props) {
  const [formData, setFormData] = useState({})
    const [error, setError] = useState([])
    const [success, setSuccess] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    fields,
    steps,
    isSubmitting,
    currentStep,
    step,
    setStep,
    schema,
    submitText = "Submit",
  } = props
  const currentFields = steps[currentStep]
  const isLastStep = step === steps.length - 1
  const formResolver = yupResolver(fields.validationSchema)
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: formResolver,
  })

  //savaData
  const saveData = (data) => {
    return new Promise((resolve, reject) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...data,
      }))
      resolve()
    })
  }
 

  // const onSubmit = (data) => {
  //   // Log the data just before saving
  //   console.log("Data to be saved:", data)

  //   saveData(data)
  //     .then(() => {
  //       return axios.post(
  //         "api/contact",
  //         formData // Use the updated formData here
  //       )
  //     })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         console.log("Form Submitted successfully", response.data)
  //         setIsSubmitted(true)
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.message)
  //     })
  // }

 const onSubmit = async (data) => {
   // Log the data just before saving
   console.log("Data to be saved:", data)

   // Update formData with the form data
   setFormData(data)

   const res = await fetch("api/contact", {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify(data), // Use the updated data object here
   })

   const { msg, success } = await res.json()
   setError(msg)
   setSuccess(success)

   if (success) {
    setFormData({})
   }
 }

  return (
    <Stack spacing={1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={2}>
          {fields.content.map((field, index) => (
            <GridItem
              key={index}
              w="100%"
              colSpan={index === fields.content.length - 1 ? 2 : 1}
            >
              <FormControl
                flex="1"
                my={4}
                key={field.name}
                isRequired={field.required}
                isInvalid={Boolean(errors[field.name])}
              >
                <FormLabel
                  color={"White"}
                  fontSize={{ base: 12, md: "14" }}
                  fontWeight={"regular"}
                >
                  {field.label}
                </FormLabel>
                {field.type === "textarea" ? (
                  <Textarea
                    variant="filled"
                    bg={"#E8E6F8"}
                    borderRadius={0}
                    errorBorderColor="red.300"
                    focusBorderColor="gray"
                    placeholder={field.placeholder}
                    _placeholder={{ opacity: 0.4, color: "gray.500" }}
                    _focus={"#E8E6F8"}
                    // Use the chakra prop to set the width to 100%
                    {...register(field.name)}
                    chakra={{
                      width: "100%",
                    }}
                  />
                ) : field.type === "select" ? (
                  <Select
                    variant="filled"
                    bg={"#E8E6F8"}
                    borderRadius={0}
                    errorBorderColor="red.300"
                    focusBorderColor="gray"
                    _placeholder={{ opacity: 0.4, color: "gray.500" }}
                    // Use the chakra prop to set the width to 100%
                    {...register(field.name)}
                    chakra={{
                      width: "100%",
                    }}
                  >
                    <option value="">select one</option>
                    {field.options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    w="full"
                    type={field.type}
                    variant="filled"
                    bg={"#E8E6F8"}
                    borderRadius={0}
                    errorBorderColor="red.300"
                    focusBorderColor="gray"
                    placeholder={field.placeholder}
                    _placeholder={{ opacity: 0.4, color: "gray.500" }}
                    {...register(field.name)}
                  />
                )}
                <FormErrorMessage>
                  {errors[field.name]?.message?.toString()}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          ))}
        </Grid>

        <Stack spacing={10} pt={2}>
          {/* {currentStep > 0 && (
            <Button mt={4} onClick={() => onSubmit({}, "previous")}>
              Previous
            </Button>
          )} */}
          <Button
            size={"md"}
            bg="#F7971D"
            border={"2px"}
            borderColor="#F7971D"
            borderRadius={0}
            _hover={{ borderColor: "#FFD700" }}
            isLoading={isSubmitting}
            fontFamily={"inter"}
            mt={4}
            type="submit"
            onClick={() => onSubmit({}, "submit")}
          >
            {currentStep < steps.length - 1 ? "Next" : submitText}
          </Button>
        </Stack>
      </form>
      {error &&
        error.map((e, index) => (
          <Text
            key={index}
            color={success ? "#68D391" : "#C53030"}
          >
            {e}
          </Text>
        ))}
    </Stack>
  )
}

export default FormTemplate
