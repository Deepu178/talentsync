import { MetadataRoute } from "next";

import { NEXT_PUBLIC_APP_URL } from "@/constants/env";
import portfolio from "@/content/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://talentsync.work";

  const routes = [
    "",
    "/about",
    "/careers",
    "/blogs",
    "/legal/privacy",
    "/legal/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const workRoutes = portfolio.map((project) => ({
    url: `${baseUrl}/work/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...workRoutes];
}
