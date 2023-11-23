//Portfolio page
import medi from "@/assets/medi-alert2.svg";
import asherMockup from "@/assets/asherBeans.svg";
import dlighterMockup from "@/assets/dlighter-mockup2.svg";
import graceHandsMockup from "@/assets/gracehand-mockup2.svg";
import next from "@/assets/next-project.svg";

//medi-alert prototype data
import lowFidelity from "@/assets/Low-fidelity.svg";
import highFidelity from "@/assets/high-fidelity.svg";

export const items = [
  {
    heading: "Medi Alert",
    body: "A mobile app to fast-track the time a patient gets medical care and first aid during emergency situations.",
    img: medi,
    href: "/portfolio/medi-alert",
  },
  {
    heading: "D-lighter Tutor",
    body: "A progressive Web application that connects parents and students with qualified tutors. It consists of a student, admin and tutor’s dashboard",
    img: dlighterMockup,
    href: "https://www.d-lightertutor.com/",
  },
  {
    heading: "Grace Hands Research Institute",
    body: "A customized landing page designed to suit various purposes, such as product launches, service promotions, and advertising campaigns.",
    img: graceHandsMockup,
    href: "https://gracehands.netlify.app/",
  },
  {
    heading: "Asher Suites",
    body: "A start-up business that sells organic foods, clothing items, and beddings. We were contracted to design their logo and custom graphics.",
    img: asherMockup,
    href: "/portfolio/asher-suites",
  },
  {
    heading: "Are you ready?",
    body: "Hire us today to discuss your project and take the first step towards a stunning online presence.",
    img: next,
    href: "/hire-us",
  },
];


export const prototypeData = [
  {
    heading: "Low Fidelity Sketches",
    body: "We used Figma for the sketch to expedite decision-making while maintaining efficiency. The design process was initiated with low-fidelity sketches and wireframes. These visualizations were informed by the initial user interviews, the project's business objectives, and a heuristic evaluation. This approach allowed us to assess and validate design concepts and user flows before finalizing any specific direction.",
    img: lowFidelity,
  },
  {
    heading: "High fidelity wireframe",
    body: "After checking out similar products and taking a deep dive into our mood board for inspiration, we used Figma to translate the sketches into high-fidelity wireframes. Then, we improved them by adding text, colors, images, icons, and CTA buttons. Since we were designing a health app, we worked with shades of white and blue. These colors connote cleanliness and are associated with health. We only designed the light theme of the product and chose to use a light grey background to make the visual look like steel. At this stage, the wireframes were defined enough for some user testing. Based on some tests, we made a few alterations and moved on to adding interactions on Figma.",
    img: highFidelity,
    href: "https://www.figma.com/proto/PZng9E3KgRNp5zr0b1qaW9/Zuri-%2F-Medi-Alert?type=design&node-id=17-436&t=ygFAhDrJuTIy6wUa-0&scaling=scale-down&page-id=9%3A169&starting-point-node-id=9%3A172",
  },
];