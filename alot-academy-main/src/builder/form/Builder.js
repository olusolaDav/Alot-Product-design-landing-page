// FormBuilder.js
import * as yup from "yup"

class FormBuilder {
  constructor() {
    this.steps = []
    this.currentStep = 0
  }

  addField(name, label, type, placeholder, options, required) {
    if (!this.steps[this.currentStep]) {
      this.steps[this.currentStep] = []
    }

    this.steps[this.currentStep].push({
      name,
      label,
      type,
      placeholder,
      options,
      required,
      value: "",
    })

    return this
  }

 setSchema(schema) {
  this.schema = schema;
  return this;
}

  isRequired() {
    const fields = this.steps[this.currentStep]
    if (fields) {
      fields[fields.length - 1].required = true
    }
    return this
  }

  nextStep() {
    this.currentStep++
    return this
  }

  build(submitCallback) {
    return {
      steps: this.steps,
      currentStep: this.currentStep,
      onSubmit: submitCallback,
    }
  }

  resetForm() {
    this.steps.forEach((step) => {
      step.forEach((field) => {
        field.value = ""
      })
    })
    this.currentStep = 0
  }
}

export default FormBuilder
