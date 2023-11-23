// FormTemplate.js

"use client"

import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Text,
  HStack,
  FormErrorMessage,
  Stack,
} from "@chakra-ui/react"
import {useState, useEffect} from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import PhoneInput from "react-phone-input-2"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import {IoIosArrowRoundForward} from 'react-icons/io'
import "react-phone-input-2/lib/style.css"
import { toast } from "sonner"
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "@/helpers/localStorageHelper"


function FormTemplate({
  fields,
  steps,
  isSubmitting,
  currentStep,
  step,
  setStep,
  schema,
  submitText = "Submit",
}) {


  const formResolver = yupResolver(fields.validationSchema)
  const [formData, setFormData] = useState({})
  const isLastStep = step === steps.length - 1
  const [isSubmitted, SetIsSubmitted] = useState(false)
  const apiLink = "https://alotacademy-app-api.vercel.app"

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
  } = useForm({
    resolver: formResolver,
  })

  //fileUpload implementation with cloudinary
  const handleFileUpload = (fileToUpload) => {
    return new Promise((resolve, reject) => {
      if (!fileToUpload) {
        toast.error(`File does not exist`, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        reject("File does not exist");
      }

      const data = new FormData();
      data.append("file", fileToUpload);
      data.append("upload_preset", "d-lightertutor-file-upload");
      data.append("cloud_name", "djvtmrcd5");

      fetch("https://api.cloudinary.com/v1_1/djvtmrcd5/auto/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          const imageUrl = data.secure_url;
          toast.success("File uploaded successfully!", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000, // Duration in milliseconds
          });
          resolve(imageUrl); // Resolve the Promise with the imageUrl
        })
        .catch((err) => {
          toast.error(`Error saving data:", ${err}`, {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          reject(err);
        });
    });
  };

  const handleFileValidation = (file, fieldName) => {
    if (file) {
      if (validateFile(file)) {
        return handleFileUpload(file); // Return the Promise from handleFileUpload
      } else {
        toast.error("Invalid file format or size.", {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 3000, // Duration in milliseconds
        });
        return Promise.reject("Invalid file format or size.");
      }
    }
    return Promise.resolve(null); // Resolve with null if no file provided
  };

  const validateFile = (doc) => {
    const allowedFormats = [
      "application/pdf",
      "application/jpg",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedFormats.includes(doc.type) || doc.size > maxSize) {
      // return false;
      return true;
    }

    return true;
  };

  //saveValue to formData
  useEffect(() => {
    fields.content.forEach((field) => {
      setValue(field.name, formData[field.name] || "")
    })
  }, [fields.content, formData, setValue])

  //get formData from localStorage
  useEffect(() => {
    // Load form data from local storage when the component mounts
    const savedData = getFromLocalStorage("formData")
    if (savedData) {
      setFormData(savedData)
    }
  }, [])

  //save formData to localStorage
  useEffect(() => {
    // Save form data to local storage whenever it changes
    saveToLocalStorage("formData", formData)
  }, [formData])

  //next function
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  //previous function
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  //savaData
  const saveData = (data) => {
    return new Promise((resolve, reject) => {
      // Perform data saving logic here, e.g., make an API request
      // Simulating a delay with setTimeout
      setTimeout(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          ...data,
        }))
        resolve()
      }, 1000)
    })
  }

  //onSubmit  with the Onsbmit function
  const onSubmit = (data) => {
    // Save data to local storage
    saveToLocalStorage("formData", data)
    const fieldsWithFiles = [
      { fieldName: "resume", file: data.resume ? data.resume[0] : null },
      {
        fieldName: "teachingCertificate",
        file: data.teachingCertificate ? data.teachingCertificate[0] : null,
      },
      {
        fieldName: "additionaCertificate",
        file: data.additionaCertificate ? data.additionaCertificate[0] : null,
      },
    ]

    // Filter out the fields that are already uploaded and need no re-upload
    const fieldsToUpload = fieldsWithFiles.filter(
      ({ fieldName }) => !uploadedUrls[fieldName]
    )

    // Use Promise.all to wait for the remaining file uploads to complete
    Promise.all(
      fieldsToUpload.map(({ fieldName, file }) =>
        handleFileValidation(file, fieldName)
      )
    )
      .then((secureUrls) => {
        // Merge the uploaded secure_url data with the existing uploadedUrls state
        const updatedUploadedUrls = { ...uploadedUrls }
        fieldsToUpload.forEach(({ fieldName }, index) => {
          if (secureUrls[index]) {
            updatedUploadedUrls[fieldName] = secureUrls[index]
          }
        })
        setUploadedUrls(updatedUploadedUrls)

        // Combine the secure_url data with the existing data object
        const newData = {
          ...data,
          resume: updatedUploadedUrls["resume"] || data.resume,
          teachingCertificate:
            updatedUploadedUrls["teachingCertificate"] ||
            data.teachingCertificate,
          additionaCertificate:
            updatedUploadedUrls["additionaCertificate"] ||
            data.additionaCertificate,
        }

        // Save the data after file uploads are completed
        //Triger submit and post the formdata to the API if laststep
        // Remove empty fields from newData
        const filteredData = Object.fromEntries(
          Object.entries(newData).filter(([key, value]) => value !== "")
        )
        isLastStep
          ? // Post the filtered data to the database
            saveData(filteredData)
              .then(() => {
                return axios.post(`${apiLink}/api/team/register`, filteredData) // Return the axios.post promise
              })
              .then((response) => {
                console.log(response.status)
                if (response.status === 200) {
                  console.log("Form Submitted successfully", filteredData)
                  resetForm()
                  setIsSubmitted(true)
                }
              })
              .catch((error) => {
                // Check if error.response and error.response.data exist
                if (error.response && error.response.data) {
                  if (error.response.data.message === "Tutor already Exist") {
                    toast.error(
                      `Email has been used, kindly try another mail`,
                      {
                        position: toast.POSITION.BOTTOM_CENTER,
                      }
                    )
                    return // Exit the catch block since the error has been handled
                  }
                }

                // If the error is not related to "Tutor already Exist"
                toast.error(
                  `Please fill out all required fields. Use the 'Back' button to revisit previous steps. Your cooperation in providing complete information is highly appreciated. Thank you.`,
                  {
                    position: toast.POSITION.BOTTOM_CENTER,
                  }
                )

                //alert("Something went wrong. Please try again later.", error);
              })
          : //otherwise added the newdata to the prvious and move to the next step
            saveData(newData)
              .then(() => {
                toast.success("Data saved successfully", {
                  position: toast.POSITION.BOTTOM_CENTER,
                })
                console.log("Data saved successfully", newData)
                // Save data to local storage
                saveToLocalStorage("formData", newData)
                console.log(step)
                nextStep()
              })
              .catch((error) => {
                toast.error("Error saving data", {
                  position: toast.POSITION.BOTTOM_CENTER,
                })
                //console.error("Error saving data:", error);
              })
      })
      .catch((error) => {
        console.error("Error uploading files:", error)
      })
  }
  //const errorborder = errors[field.name] ? "red.300" : "#E8E6F8"
  return (
    <Stack spacing={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack align="center" justify={"center"}>
          <Text fontSize="3xl" textAlign={"center"}>
            {fields.title}
          </Text>
          {fields.content.map((field) => (
            <FormControl
              my={4}
              key={field.name}
              isRequired={field.required}
              isInvalid={Boolean(errors[field.name])}
            >
              <FormLabel
                color={"gray"}
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
                  borderColor={errors[field.name] ? "red.300" : "#E8E6F8"}
                  errorBorderColor="red.300"
                  focusBorderColor={errors[field.name] ? "red.300" : "gray"}
                  w="full"
                  placeholder={field.placeholder}
                  {...register(field.name)}
                />
              ) : field.type === "select" ? (
                <Select
                  variant="filled"
                  bg={"#E8E6F8"}
                  borderRadius={0}
                  borderColor={errors[field.name] ? "red.300" : "#E8E6F8"}
                  errorBorderColor="red.300"
                  focusBorderColor={errors[field.name] ? "red.300" : "gray"}
                  w="full"
                  {...register(field.name)}
                >
                  <option value="" disabled>
                    select one
                  </option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              ) : field.type === "tel" ? (
                <>
                  <PhoneInput
                    name={field.name}
                    autoCorrect="off"
                    placeholder="Enter a Valid Phone Number"
                    country={"ng"}
                  />

                  <Input
                    w="full"
                    type={field.type}
                    variant="filled"
                    bg={"#E8E6F8"}
                    borderRadius={0}
                    borderColor={errors[field.name] ? "red.300" : "#E8E6F8"}
                    errorBorderColor="red.300"
                    focusBorderColor={errors[field.name] ? "red.300" : "gray"}
                    placeholder={field.placeholder}
                    {...register(field.name)}
                  />
                </>
              ) : (
                <Input
                  w="full"
                  type={field.type}
                  variant="filled"
                  bg={"#E8E6F8"}
                  borderRadius={0}
                  borderColor={errors[field.name] ? "red.300" : "#E8E6F8"}
                  errorBorderColor="red.300"
                  focusBorderColor={errors[field.name] ? "red.300" : "gray"}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                />
              )}
              <FormErrorMessage>
                {errors[field.name]?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
          ))}
          <HStack spacing={4} align="center" justify={"center"}>
            {currentStep > 0 && (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                size={"md"}
                fontFamily={"Inter"}
                borderRadius={0}
                leftIcon={<MdOutlineKeyboardBackspace />}
                color={"#F7971D"}
                _hover={{ bg: "#F6F5FF", borderColor: "#FFD700" }}
              >
                Previous
              </Button>
            )}

            <Button
              type="submit"
              size={"md"}
              bg={"primary"}
              border={"2px"}
              color={"white"}
              fontFamily={"Inter"}
              borderColor={"primary"}
              borderRadius={0}
              rightIcon={<IoIosArrowRoundForward />}
              _hover={{ borderColor: "#FFD700" }}
            >
              {isLastStep ? "Submit Application" : `Save and Continue`}
            </Button>
          </HStack>
        </Stack>
      </form>
    </Stack>
  )
}

export default FormTemplate
