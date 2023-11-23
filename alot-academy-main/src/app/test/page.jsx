
"use client"
import React from "react"
import * as Yup from "yup"
import FormBuilder from "@/builder/multistep/Builder"
import MultiStepForm from "@/builder/multistep/MultiStepForm"

function MultiStepFormExample() {
  const formBuilder = new FormBuilder()

  const schemaStep1 = Yup.object().shape({
    fullName: Yup.string().required("First name is required"),
    title: Yup.string().required("Last name is required"),
  })

  const schemaStep2 = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  })
  const th = ""
  //name, label, type, placeholder, options, required
  const form = formBuilder
    .addStep()
    .addField("fullName", "Full name", "text", th, [], true)
    .isRequired()
    .addField("title", "Title", "text", th, [], true)
    .addField("email", "E-mail", "email", th, [], true)
    .addField("phoneNumber", "Phone Number", "tel", th, [], true)
    .setSchema(schemaStep1)
    .addStep()
    .addField("email", "E-mail", "email", th, [], true)
    .addField("phoneNumber", "Phone Number", "tel", th, [], true)
    .isRequired()
    .setSchema(schemaStep2)
    .buildMultiStep((data) => {
      console.log("Multi-step form completed with data:", data)
    })

  return (
    <div>
      <h1>Multi-Step Form</h1>
      <MultiStepForm {...form} />
    </div>
  )
}

export default MultiStepFormExample
