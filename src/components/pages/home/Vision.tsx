const process = [
  {
    id: "sec-validate",
    title: "Validate",
    subtitle: "Idea Validation & Product Market Fit",
    description:
      "Stop guessing and start Market Validation with confidence. We'll ensure your idea solves a problem your customers desperately need solved.",
    // src: "https://www.youtube.com/embed/NNtGIZk0zOE?si=yXMdfD-t1ssVih7h",
  },
  {
    id: "sec-build",
    title: "MVP",
    subtitle: "MVP Building",
    description:
      "We'll help you build a Minimum Viable Product (MVP) that's ready to launch and test with real users. Our team of experts will guide you through the process of building your MVP from scratch.",
    // src: "https://www.youtube.com/embed/NNtGIZk0zOE?si=yXMdfD-t1ssVih7h",
  },
  {
    id: "sec-market",
    title: "Market",
    subtitle: "Go-to-Market Strategy",
    description:
      "We help you develop a go-to-market strategy for your MVP. Our role is to provide strategic guidance on your launch and sales approach, empowering you to execute your own marketing and reach your target customers.",
    // src: "https://www.youtube.com/embed/NNtGIZk0zOE?si=yXMdfD-t1ssVih7h",
  },
  {
    id: "sec-scale",
    title: "Scale",
    subtitle: "Scale",
    description:
      "Once your MVP is validated, we help you prioritize and implement additional features based on real user feedback. This ensures your product evolves to meet customer needs and stays competitive.",
    // src: "https://www.youtube.com/embed/NNtGIZk0zOE?si=yXMdfD-t1ssVih7h",
  },
];

const Vision = () => {
  return (
    <>
      {process.map((process) => (
        <div
          className="section w-11/12 mx-auto text-center"
          id={process.id}
          key={process.title}
        >
          <p
            className="heading h2 text-center text-foreground font-serif italic font-light"
            id="services"
          >
            We empower Founders to
          </p>
          <span className="heading heading-xl font-normal">
            {process.title}
          </span>
          <h2 className="font-medium text-muted-foreground mt-6 md:mt-10 text-sm">
            {process.subtitle}
          </h2>
          <p className="h1 mt-5 text-2xl md:text-4xl font-light max-w-4xl mx-auto">
            {process.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default Vision;
