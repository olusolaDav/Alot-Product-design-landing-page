import options from "./options"
import * as yup from "yup"
// const ageRange = options.ageRange.map((d) => d.value)
// const state = options.state.map((d) => d.value)
const genders = options.genders.map((d) => d.value)

const countries = options.countries.map((d) => d.name)

//const yesOrNo = options.yesorno.map((d) => d.value)

const br = <br />
const ph = "Type here"
const steps = [
  // Basic Info
  {
    title: "Basic Info",
    stepTitle:
      "Please provide relevant, true and accurate  information of yourself, avoid false, misleading, or inaccurate information.",
    content: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Type here",
        required: true,
      },
      {
        name: "phoneNumber",
        label: "Phone Number",
        type: "text",
        placeholder: "Type here",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "text",
        placeholder: "Type here",
        required: true,
      },
      {
        name: "age",
        label: "Age",
        type: "text",
        placeholder: "Enter your mobile number",
        required: true,
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        placeholder: ph,
        options: options.genders,
        required: true,
      },

      {
        name: "address",
        label: "Address",
        type: "textarea",
        placeholder: ph,
        required: true,
      },
    ],
    validationSchema: yup.object().shape({
      fullName: yup.string().required("Full name is required"),
      email: yup
        .string()
        .required("please enter a valid email")
        .matches(
          /^\S+@\S+\.\S+$/,
          "valid email follow this pattern: email@example.com"
        ),
      phoneNumber: yup
        .string()
        .min(10)
        .required("Phone Number is required")
        .matches(/[0-9]+/, "Phone number must be a number"),
      age: yup
        .string()
        .min(1)
        .required("Age is required")
        .matches(/[0-9]+/, "Ag must be a number"),
      gender: yup.string().required("Gender is required"),
      address: yup.string().required("Address is required"),
    }),
  },

  //  Educational Details
  {
    title: "Educational Details ",
    stepTitle:
      "Please provide relevant, true and accurate  information of yourself, avoid false, misleading, or inaccurate information.",
    content: [
      {
        name: "academicQualification",
        label: "Academic Qualification",
        type: "select",
        placeholder: "Select an option",
        options: options.qualifications,
        required: true,
      },
      {
        name: "institution",
        label: "Name of the Institution Attended/Attending",
        type: "text",
        placeholder: "Type here",
        required: true,
      },
      {
        name: "course",
        label: "What course did you study in school?",
        type: "text",
        placeholder: "Type Here",
        required: true,
      },

      {
        name: "graduationDate",
        label: "Graduation Date (or expected)     ",
        type: "date",
        placeholder: "Type or select date",
        required: true,
      },
      {
        name: "NYSCStatus",
        label: "NYSC Status",
        type: "select",
        options: options.nysc,
        placeholder: "select an option",
        required: true,
      },
    ],
    validationSchema: yup.object().shape({
      academicQualification: yup
        .string()
        .required("Academic Qualification is require"),
      institution: yup.string().required("Name of Institution is required"),
      course: yup.string().required("Course of study is required"),
      graduationDate: yup.string().required("Graduation date is required"),
      NYSCStatus: yup.string().required("NYSC status is required"),
    }),
  },

  //Professional Details

  {
    title: "Professional Details",
    stepTitle:
      "Please provide relevant, true and accurate  information of yourself, avoid false, misleading, or inaccurate information.",
    content: [
      {
        name: "internshipPath",
        label: "Desired Internship Path",
        type: "select",
        options: [
          "Frontend",
          "Backend",
          "Mobile App Development",
          "Product Design",
        ],
        placeholder: "select an option",
        required: true,
      },
      {
        name: "yrsExperience",
        label: "Years of Work Experience in your choosen role",
        type: "text",
        placeholder: "Type your years of experience in the chosen path",
        required: true,
      },
      {
        name: "levelOfExperience",
        label: "Your Level of Experience",
        type: "select",
        options: [
          "Beginner",
          "Entry-Level",
          "Mid-Level",
          "Experienced-Level (Senior)",
          "Lead-Level",
        ],
        placeholder: "select an option",
        required: true,
      },
      {
        name: "desiredRemuneration",
        label:
          "Desired Monthly Remuneration (Note that it’s a stipend not salary)",
        type: "text",
        placeholder: "Amount in Naira",
        required: true,
      },
      {
        name: "skills",
        label: "What skills do you have that are related to this role?",
        type: "textarea",
        placeholder: "Write each skill separated by a comma",
        required: true,
      },
      {
        name: "completedTraining",
        label:
          "Please mention the training program or courses you've completed that are relevant to your chosen internship path.",
        type: "textarea",
        placeholder: ph,
        required: true,
      },
      {
        name: "linkToProject",
        label:
          "Please provide links to projects you did during the training program or courses you've completed that are relevant to your chosen internship path.",
        type: "text",
        placeholder: ph,
        required: true,
      },
      {
        name: "technologiesLearnt",
        label:
          "What specific technologies, tools, or skills have you acquired during your training?",
        type: "textarea",
        placeholder: ph,
        required: true,
      },
      {
        name: "expectationDuringInternship",
        label:
          "How do you envision mentorship helping you during your internship?",
        type: "textarea",
        placeholder: ph,
        required: true,
      },
    ],
    validationSchema: yup.object().shape({
      internshipPath: yup.string().required("This field is required"),
      yrsExperience: yup.string().required("This field is required"),
      levelOfExperience: yup.string().required("This field is required"),
      desiredRemuneration: yup.string().required("This field is required"),
      skills: yup.string().required("This field is required"),
      completedTraining: yup.string().required("This field is required"),
      linkToProject: yup.string().required("This field is required"),
      technologiesLearnt: yup.string().required("This field is required"),
      expectationDuringInternship: yup
        .string()
        .required("This field is required"),
    }),
  },

  // Availability and Access to Required Resources

  {
    title: "Availability and Access to Required Resources ",
    stepTitle:
      "Please provide relevant, true and accurate  information of yourself, avoid false, misleading, or inaccurate information.",
    content: [
      {
        name: "availability",
        label: "How is your availability like?",
        type: "select",
        options: ["Full-time", "Part-time", "Weekend only", "Not sure"],
        placeholder: "select an option",
        required: true,
      },
      {
        name: "hourPerDay",
        label: "Available hours per day",
        type: "text",
        placeholder: "Type here",
        required: true,
      },

      {
        name: "isAccessToReliableInternet",
        label:
          "Do you have access to a reliable and high-speed internet connection at your remote work location?",
        type: "select",
        options: options.yesorno,
        placeholder: "select an option",
        required: true,
      },

      {
        name: "isAccessToReliablePower",
        label:
          "Do you have a reliable power supply at your remote work location during your work hours?",
        type: "select",
        options: options.yesorno,
        placeholder: "select an option",
        required: true,
      },
      {
        name: "isAlternativePower",
        label:
          "Do you have a backup power source or alternative power supply options in case of power outages or disruptions?",
        type: "select",
        options: options.yesorno,
        placeholder: "select an option",
        required: true,
      },

      {
        name: "alternativePower",
        label: "If yes, please mention the alternatives you have.",
        type: "textarea",
        placeholder: "Type here",
        required: true,
      },

      {
        name: "howToManageNoPower",
        label:
          "How do you plan to manage your work in case of extended power outages that may last for several hours or more?",
        type: "textarea",
        placeholder: "Type here",
        required: true,
      },
      {
        name: "readyToWork",
        label: "When would you be ready to start working with us?",
        type: "select",
        options: [
          "Immediately",
          "1 week time",
          "2 week time",
          "1 month time",
          "I'm not sure",
        ],
        placeholder: "select an option",
        required: true,
      },
    ],
    validationSchema: yup.object().shape({
      availability: yup.string().required("This field is required"),
      hourPerDay: yup.string().required("This field is required"),
      isAccessToReliableInternet: yup
        .string()
        .required("This field is required"),
      isAccessToReliablePower: yup.string().required("This field is required"),
      isAlternativePower: yup.string().required("This field is required"),
      alternativePower: yup.string().required("This field is required"),
      howToManageNoPower: yup.string().required("This field is required"),
      readyToWork: yup.string().required("This field is required"),
    }),
  },

  //
  {
    title: "Links and Document",
    stepTitle:
      "Please provide relevant, true and accurate  information of yourself, avoid false, misleading, or inaccurate information.",
    content: [
      {
        name: "linkedIn",
        label: "LinkedIn URL",
        type: "text",
        placeholder: "Type here",
        required: false,
      },
      {
        name: "gitHub",
        label: "GitHub URL",
        type: "text",
        placeholder: "Type here",
        required: false,
      },
      {
        name: "portfolio",
        label: "Portfolio URL",
        type: "text",
        placeholder: "Type here",
        required: false,
      },
      {
        name: "cv",
        label: "Upload your CV",
        type: "file",
        placeholder: "Upload file",
        required: true,
      },
      {
        name: "howDidYouFindUs",
        label: "How did you find us?",
        type: "select",
        options: [
          "Google",
          "Linkedin",
          "Facebook",
          "Twitter",
          "WhatsApp",
          "Family/Friend",
          "Other",
        ],
        placeholder: "selectan option",
        required: true,
      },
    ],
    validationSchema: yup.object().shape({
      linkedIn: yup.string(),
      gitHub: yup.string(),
      portfolio: yup.string(),
      cv: yup.string().required("Please Upload your CV"),
      howDidYouFindUs: yup.string().required("This field is required"),
    }),
  },
]

export default steps
