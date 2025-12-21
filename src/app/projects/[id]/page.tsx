import Image from "next/image";

import ProjectSection from "@/components/content/ProjectSection";
import NotFound from "@/components/NotFound";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import portfolio from "@/content/portfolio";

export default async function Project({ params }: { params: { id: string } }) {
  const project = portfolio.find((proj) => proj.id === params.id);

  if (!project) {
    return <NotFound />;
  }

  const {
    image,
    images,
    client,
    title,
    description,
    about,
    challenges,
    solutions,
    results,
    roadmap,
    link,
    faqs,
  } = project;

  return (
    <main className="">
      <header className="relative flex items-center justify-center h-[500px] md:h-[750px]">
        <Image
          className="absolute object-cover w-full h-full aspect-video"
          src={image}
          alt={title}
          height={1200}
          width={2100}
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>

        <div className="z-20 max-w-3xl font-medium text-center">
          <h1 className="mb-5 text-white md:mb-8">
            <a href={link} className="text-black" target="_blank">
              {title}
            </a>
          </h1>
          <p className="text-lg md:text-2xl">{description}</p>
        </div>
      </header>

      <section className="w-11/12 max-w-screen-xl mx-auto my-20 space-y-14 lg:space-y-24">
        <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">
          <Image
            src={image}
            height={500}
            width={700}
            alt={title}
            className="object-cover w-full rounded shadow-md aspect-[5/3]"
          />
          {about && (
            <ProjectSection title="About the Project" content={about} />
          )}
        </div>

        {challenges && (
          <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">
            <ProjectSection title="Challenges" content={challenges} />
            <Image
              src={images[1]}
              height={500}
              width={700}
              alt={title}
              className="object-cover w-full m-auto rounded shadow-md aspect-video"
            />
          </div>
        )}

        {client && (
          <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">
            {images[1] && (
              <Image
                src={images[1]}
                height={500}
                width={700}
                alt={title}
                className="object-cover w-full m-auto rounded shadow-md aspect-video"
              />
            )}
            <ProjectSection title="The Client" content={client} />
          </div>
        )}
        {solutions && (
          <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-1">
            <ProjectSection title="Solutions" content={solutions} />
          </div>
        )}
        {results && (
          <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">
            {images[2] && (
              <Image
                src={images[2]}
                height={500}
                width={700}
                alt={title}
                className="object-cover w-full m-auto rounded shadow-md aspect-video"
              />
            )}
            <ProjectSection title="Results" content={results} />
          </div>
        )}
        {roadmap && (
          <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">
            <ProjectSection title="Future Roadmap" content={roadmap} />
            {images[3] && (
              <Image
                src={images[3]}
                height={500}
                width={700}
                alt={title}
                className="object-cover w-full rounded m-auto shadow-md aspect-video"
              />
            )}
          </div>
        )}
        {faqs && (
          <div className="mx-auto layout">
            <div className="max-w-3xl">
              <h2 className="h1">Frequently Asked Questions</h2>
              <p className="mt-6 text-lg font-normal text-muted-foreground">
                With lots of unique questions, We will be answering most of the
                Frequently Asked Questions here.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full mt-12">
              {faqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`${item.id}`}
                  className="relative"
                >
                  <div className="absolute h-[2px] rounded bottom-0 left-0 w-full bg-gradient-to-r from-primary to-destructive"></div>
                  <AccordionTrigger className="border-b-0 relative">
                    <span className="h2 text-left py-3">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <span className="h3 text-muted-foreground">{item.a}</span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </section>
    </main>
  );
}
