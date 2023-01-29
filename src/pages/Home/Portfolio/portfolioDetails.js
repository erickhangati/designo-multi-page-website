// PORTFOLIO DETAILS

import imgExpress from "./images/webDesign/image-express.jpg";
import imgTransfer from "./images/webDesign/image-transfer.jpg";
import imgProton from "./images/webDesign/image-photon.jpg";
import imgBuilder from "./images/webDesign/image-builder.jpg";
import imgBlogr from "./images/webDesign/image-blogr.jpg";
import imgCamp from "./images/webDesign/image-camp.jpg";

import imgAirFilter from "./images/appDesign/image-airfilter.jpg";
import imgEyeCam from "./images/appDesign/image-eyecam.jpg";
import imgFaceIt from "./images/appDesign/image-faceit.jpg";
import imgLoopStudios from "./images/appDesign/image-loopstudios.jpg";
import imgToDo from "./images/appDesign/image-todo.jpg";

import imgBoxedWater from "./images/graphicDesign/image-boxed-water.jpg";
import imgTimBrown from "./images/graphicDesign/image-change.jpg";
import imgScience from "./images/graphicDesign/image-science.jpg";

const portfolioDetails = [
  {
    name: "Web Design",
    slug: "web-design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    jobs: [
      {
        title: "Express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
        image: imgExpress,
      },
      {
        title: "Transfer",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
        image: imgTransfer,
      },
      {
        title: "Photon",
        description:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
        image: imgProton,
      },
      {
        title: "Builder",
        description:
          "Connects users with local contractors based on their location",
        image: imgBuilder,
      },
      {
        title: "Blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
        image: imgBlogr,
      },
      {
        title: "Camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
        image: imgCamp,
      },
    ],
  },
  {
    name: "App Design",
    slug: "app-design",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    jobs: [
      {
        title: "Airfilter",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
        image: imgAirFilter,
      },
      {
        title: "EyeCam",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
        image: imgEyeCam,
      },
      {
        title: "FaceIt",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
        image: imgFaceIt,
      },
      {
        title: "ToDo",
        description:
          "A todo app that features cloud sync with light and dark mode",
        image: imgToDo,
      },
      {
        title: "LoopStudios",
        description: "A VR experience app made for Loopstudios",
        image: imgLoopStudios,
      },
    ],
  },
  {
    name: "Graphic Design",
    slug: "graphic-design",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    jobs: [
      {
        title: "Tim Brown",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
        image: imgTimBrown,
      },
      {
        title: "Boxed Water",
        description: "A simple packaging concept made for Boxed Water",
        image: imgBoxedWater,
      },
      {
        title: "Science!",
        description:
          "A poster made in collaboration with the Federal Art Project",
        image: imgScience,
      },
    ],
  },
];

export default portfolioDetails;
