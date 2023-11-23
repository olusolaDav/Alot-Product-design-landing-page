import { useState } from "react"
import { Grid, Stack } from "@chakra-ui/react"
import FormStep from "../formStepForm"
import Logo from "@/assets/formlogo.svg"
import steps from "../../../utils/findTutorFormSteps"
import { Toaster } from "sonner"

const MultiStepForm = () => {
  const [step, setStep] = useState(0)
  const currentStep = steps[step]
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      className="w-screen h-screen"
    >
   

      <Grid item sm={10} md={8}>
        <Toaster richColors position="bottom-right" />
        <FormStep
          fields={currentStep}
          currentStep={step}
          step={step}
          setStep={setStep}
        />
      </Grid>
    </Grid>
  )
}

export default MultiStepForm