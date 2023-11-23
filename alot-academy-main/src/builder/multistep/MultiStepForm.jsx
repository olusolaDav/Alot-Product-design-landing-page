"use client"
import React, { useState } from "react"
import FormTemplate from "./Template"
import * as Yup from "yup"

import { Stack, Button, Box } from "@chakra-ui/react"

function MultiStepForm(props) {
  const { steps, onComplete } = props
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [validationErrors, setValidationErrors] = useState({})

  const handleStepSubmit = async (stepData) => {
    try {
      const validationSchema = Yup.object().shape(steps[currentStep].schema)

      await validationSchema.validate(stepData, {
        abortEarly: false,
      })

      const newFormData = { ...formData, ...stepData }
      setFormData(newFormData)

      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
        setValidationErrors({})
      } else {
        onComplete(newFormData)
      }
    } catch (errors) {
      if (errors.inner) {
        const errorsObj = {}
        errors.inner.forEach((error) => {
          errorsObj[error.path] = error.message
        })
        setValidationErrors(errorsObj)
      }
    }
  }

  return (
    <Stack spacing={4}>
      <form onSubmit={(e) => e.preventDefault()}>
        {steps[currentStep] && (
          <>
            <FormTemplate
              {...steps[currentStep]}
              onSubmit={(data) => handleStepSubmit(data)}
            />
            <Box textAlign="center">
              <Button
                onClick={() => setCurrentStep(currentStep - 1)}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button type="submit" onClick={() => handleStepSubmit(formData)}>
                {currentStep === steps.length - 1 ? "Complete" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </form>
    </Stack>
  )
}

export default MultiStepForm
