import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/llms.txt"],
            disallow: ["/api/", "/cloud/", "/development/"], // Hiding internal/legacy paths if needed
        },
        sitemap: "https://talentsync.work/sitemap.xml",
    };
}
