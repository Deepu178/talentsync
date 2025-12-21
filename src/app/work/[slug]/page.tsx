import { Metadata } from "next";
import { notFound } from "next/navigation";
import portfolio from "@/content/portfolio";
import CaseStudyView from "@/components/pages/work/CaseStudyView";

// 1. Generate Dynamic SEO Metadata (Runs on Server)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = portfolio.find((p) => p.id === params.slug);
    if (!project) return {};

    return {
        title: `${project.title} | TalentSync Case Study`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.image],
        },
    };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const projectIndex = portfolio.findIndex((p) => p.id === params.slug);
    const project = portfolio[projectIndex];

    if (!project) {
        return notFound();
    }

    // Logic for "Next Project"
    const nextProjectIndex = (projectIndex + 1) % portfolio.length;
    const nextProject = portfolio[nextProjectIndex];

    return <CaseStudyView project={project} nextProject={nextProject} />;
}
