const roadmap = [
  {
    id: 0,
    img: "/roadmap/1.avif",
    title: "Gathering Requirements",
    description:
      "We'll start by understanding your project requirements and complexity. We'll also analyze your current systems to identify areas for improvement.",
  },
  {
    id: 1,
    img: "/roadmap/2.jpg",
    title: "Timeline & Planning",
    description:
      "Based on the gathered information, we'll develop a detailed project scope, timelines, and budget tailored to your custom software needs.",
  },
  {
    id: 2,
    img: "/roadmap/3.jpg",
    title: "MVP Building and Testing",
    description:
      "Our team will create a visually appealing and highly functional MVP of your software, ensuring it meets your business needs and target audience requirements.",
  },
  {
    id: 3,
    img: "/roadmap/4.jpg",
    title: "Scaling the Software",
    description:
      "After launching the MVP, we'll conduct thorough testing to ensure it functions properly across all devices and browsers. We'll then scale the development based on user feedback and early traction.",
  },
  {
    id: 4,
    img: "/roadmap/5.jpg",
    title: "Ongoing Support",
    description:
      "We'll provide ongoing support and maintenance after deployment, ensuring your software remains relevant and effective over time with minimal additional costs.",
  },
];
const updatedRoadmap = roadmap.map((step) => {
  switch (step.id) {
    case 0:
      return {
        ...step,
        description:
          "We'll start by understanding your project requirements and complexity, focusing on custom software development for founders and companies. We'll also analyze your current systems to identify areas for improvement.",
      };
    case 1:
      return {
        ...step,
        description:
          "Based on the gathered information, we'll develop a detailed project scope, timelines, and budget tailored to your custom software needs, ensuring alignment with your business goals.",
      };
    case 2:
      return {
        ...step,
        description:
          "Our team will create a visually appealing and highly functional MVP of your software, ensuring it meets your business needs and target audience requirements, with a focus on scalability and performance.",
      };
    case 3:
      return {
        ...step,
        description:
          "After launching the MVP, we'll conduct thorough testing to ensure it functions properly across all devices and browsers. We'll then scale the development based on user feedback and early traction, focusing on custom solutions for your business.",
      };
    case 4:
      return {
        ...step,
        description:
          "We'll provide ongoing support and maintenance after deployment, ensuring your software remains relevant and effective over time with minimal additional costs, and continuously adapting to your business needs.",
      };
    default:
      return step;
  }
});

export default roadmap;
export type RoadMapIn = (typeof roadmap)[number];
