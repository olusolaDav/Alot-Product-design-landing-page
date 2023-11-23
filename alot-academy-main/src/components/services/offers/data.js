//Web Service
import frontend from "@/assets/front-end.svg";
import backend from "@/assets/backend.svg";
import landingPage from "@/assets/landing-page.svg";
import ecommerce from "@/assets/ecommerce-web-page.svg";
import webApp from "@/assets/custom-web-application.svg";
import blog from "@/assets/web-blog.svg";
import portfolio from "@/assets/portfolio.svg";

//App Service
import crossPlatform from "@/assets/cross-platform.svg";
import pwa from "@/assets/pwa.svg";
import embedded from "@/assets/embed-software.svg";


//Product design service
import uiuxWeb from "@/assets/uiux-web.svg";
import uiuxMobile from "@/assets/uiux-mobile.svg"; 
import usability from "@/assets/usability-testing.svg";
import mockups from "@/assets/mockups.svg"; 
import customGraphic from "@/assets/custom-graphic.svg"; 

const offerItems = {
  web: [
    {
      heading: "Front-end Development",
      img: frontend,
      body: "Front-end development, or client-side development, is all about creating the visual and interactive elements users directly interact with on a website or web app. Our company excels in this field, offering innovative front-end development services that turn your website into a dynamic and user-centric masterpiece. Our skilled team specializes in crafting visually striking and highly functional web interfaces that engage users and deliver impactful results.",
    },
    {
      heading: "Back-end Development",
      img: backend,
      body: "Back-end development, or server-side development, involves managing the server, databases, and the logic powering the front-end. It handles the hidden processes crucial for website or app functionality, including data storage, retrieval, and processing. Our adept back-end developers construct the server infrastructure, manage data, and handle business logic, while front-end developers focus on user interface and interactions.",
    },
    {
      heading: "Landing Page",
      img: landingPage,
      body: "We excel in crafting effective, customized landing pages that deliver results. Our services are designed to suit various purposes, such as product launches, service promotions, and advertising campaigns. Landing pages enable precise messaging to targeted audiences, enhancing the overall effectiveness of your marketing strategies.",
    },
    {
      heading: "E-commerce Website",
      img: ecommerce,
      body: "E-commerce websites, or online platforms, enable the buying and selling of goods and services online, with types including B2C, B2B, and C2C. They're crucial in the global economy, helping businesses reach wider audiences. Alot Project Team specializes in creating visually appealing, functional e-commerce sites to boost your business.",
    },
    {
      heading: "Custom Web Applications",
      img: webApp,
      body: "Custom web applications are tailor-made software solutions designed to meet specific business needs and requirements. Unlike off-the-shelf software, custom web applications are developed from scratch or modified to suit a company's unique processes, workflows, and goals. At Alot Project Team, we've assembled a squad of tech-savvy heroes armed with the latest in web technologies. They're not just developers; they're digital architects, crafting solutions that take your ideas and businesses to soaring heights.",
    },
    {
      heading: "Blog Website",
      img: blog,
      body: "A blog is more than just text and images; it's a dynamic platform connecting you to a global audience. It's evolved from diaries to a powerful tool for businesses and individuals. At Alot Project Team, we help you create a blog that amplifies your message and identity.",
    },
    {
      heading: "Portfolio/Showcase",
      img: portfolio,
      body: "A portfolio website is crucial as it's often the initial interaction with potential clients or collaborators. It serves as a dynamic platform to convey your story, display your best work, and engage your audience. A well-designed portfolio not only captivates visitors but also reflects professionalism and dedication. At Alot Project Team, we customize our approach for each artist, photographer, or creative professional, recognizing their distinct vision and specific needs.",
    },
  ],

  mobile: [
    {
      heading: "Native App Development",
      img: webApp,
      body: "When it comes to native app development, we offer a comprehensive approach for specific operating systems. These apps are written using platform-specific programming languages and development tools, resulting in a high level of performance and a consistent user experience. Our expertise in native app development encompasses the following platforms, IOS, Android, Tizen (Samsung), Windows (Microsoft), BlackBerry.",
    },
    {
      heading: "Cross-Platform Development",
      img: crossPlatform,
      body: "Cross-Platform Development offers an efficient way to create apps that work seamlessly on multiple platforms, reducing development time and costs. We offer expertise in various cross-platform frameworks, including: React Native (JavaScript and React, React Native enables the development of native-like apps for both iOS and Android with a single codebase) and Flutter (Powered by Dart, Flutter allows for high-quality app development with a single codebase). ",
    },
    {
      heading: "Progressive Web Apps (PWA)",
      img: pwa,
      body: "Progressive Web Apps (PWAs) are web-based applications that provide an app-like experience on mobile devices. Developed using standard web technologies like HTML, CSS, and JavaScript, PWAs are accessible through web browsers. Users can add them to their home screens for quick access, making them a cost-effective option for broader reach.",
    },
    {
      heading: "Embedded Software",
      img: embedded,
      body: "In addition to mobile app development, we have expertise in Embedded Software Development. Embedded software powers a wide range of devices and systems, from IoT devices and medical equipment to automotive systems and industrial machines. Our team is proficient in developing reliable and efficient embedded software to meet your specific requirements.",
    },
  ],

  product: [
    {
      heading: "Designing Brand Identity",
      img: webApp,
      body: "When it comes to native app development, we offer a comprehensive approach for specific operating systems. These apps are written using platform-specific programming languages and development tools, resulting in a high level of performance and a consistent user experience. Our expertise in native app development encompasses the following platforms, IOS, Android, Tizen (Samsung), Windows (Microsoft), BlackBerry.",
    },
    {
      heading: "UI/UX Web Design",
      img: uiuxWeb,
      body: "We're experts in UI/UX web design, specializing in crafting user interfaces for complex and revolutionary web applications. Our approach is built on industry best practices to ensure your web application is not only highly usable but also compatible across various platforms and accessible to all users. We combine design excellence with usability to create a seamless and engaging experience that sets your web application apart from the competition. ",
    },
    {
      heading: "UI/UX Mobile App Design",
      img: uiuxMobile,
      body: "Our user-centric approach ensures that your mobile app interfaces prioritize user satisfaction, with seamless cross-platform experiences, intuitive navigation, and a focus on accessibility for all users. We blend functionality with visual appeal to create engaging designs, continuously iterating to stay at the forefront of user experience excellence. Partner with us to transform your mobile app into a user-centric masterpiece.",
    },
    {
      heading: "Usability Testing",
      img: usability,
      body: "At Alot Project Team, we prioritize your product's success with our comprehensive Usability Testing approach. We meticulously identify usability issues, gather qualitative and quantitative data, and employ advanced tools to assess your product. Our goal is clear: to enhance performance through informed design and functionality improvements. Choose us for results-focused Usability Testing that ensures your product meets and exceeds user expectations.",
    },
    {
      heading: "Mockups",
      img: mockups,
      body: "In today's fast-paced business world, the ability to transform your ideas into reality quickly and effectively can make all the difference. That's where our mockup services come into play, helping you bridge the gap between concept and creation effortlessly. See your product packaging come to life with realistic mockups that showcase how it will look on store shelves.",
    },
    {
      heading: "Custom Graphics",
      img: customGraphic,
      body: "At Alot Project Team, we believe that one size doesn't fit all. That's why we specialize in crafting custom graphics that are as unique as your brand. Our team of skilled graphic designers takes the time to understand your goals, target audience, and brand personality. We don't just create visuals; we create experiences.",
    },
  ],
};

export default offerItems;
