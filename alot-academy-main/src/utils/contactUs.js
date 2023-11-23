import options from "./options"
import * as yup from "yup"

const br = <br />
const ph = "Type here"
const steps = [
  // Hire Us
  {
    title: "Basic Info",
    stepTitle:
      "Please provide relevant, true and accurate  information of yourself, avoid false, misleading, or inaccurate information.",
    content: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Type here",
        required: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Type here",
        required: false,
      },
      {
        name: "email",
        label: "E-mail",
        type: "text",
        placeholder: "Type here",
        required: true,
      },
      {
        name: "phoneNumber",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your mobile number",
        required: true,
      },

      {
        name: "message",
        label: "How can we help you?",
        type: "textarea",
        placeholder: "Type here",
        required: true,
      },
    ],
    validationSchema: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup
        .string()
        .email("Field should contain a valid e-mail")
        .max(255)
        .required("E-mail is required"),
      phoneNumber: yup.string().required("Phone Number is required"),
     message: yup.string().required(),
 
    }),
  },
]

export default steps
