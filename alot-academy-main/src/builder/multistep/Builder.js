import * as Yup from "yup"

class FormBuilder {
  constructor() {
    this.steps = []
    this.currentStep = null
  }

  addStep() {
    if (this.currentStep) {
      this.steps.push(this.currentStep)
    }

    this.currentStep = {
      fields: [],
      validationSchema: Yup.object(),
    }

    return this
  }

  addField(name, label, type, placeholder, options, required) {
    if (this.currentStep) {
      this.currentStep.fields.push({
        name,
        label,
        type,
        placeholder,
        options,
        required,
        value: "",
      })
    }

    return this
  }

  setSchema(schema) {
    if (this.currentStep) {
      this.currentStep.validationSchema = schema
    }
    return this
  }

  isRequired() {
    if (this.currentStep && this.currentStep.fields.length > 0) {
      const lastField =
        this.currentStep.fields[this.currentStep.fields.length - 1]
      if (lastField) {
        lastField.required = true
      }
    }
    return this
  }

  buildMultiStep(onComplete) {
    if (this.currentStep) {
      this.steps.push(this.currentStep)
    }

    const steps = this.steps.map((step) => ({
      fields: step.fields,
      onSubmit: step.onSubmit,
      validationSchema: step.validationSchema,
    }))

    return {
      steps,
      onComplete,
    }
  }

  resetForm() {
    this.steps = []
    this.currentStep = null
  }
}

export default FormBuilder
