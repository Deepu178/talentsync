type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
  banner?: string;
  isBlog?: boolean;
};
export function openGraph({
  siteName,
  templateTitle,
  description,
  banner,
  logo = "https://og.clarence.link/images/logo.jpg",
  isBlog = false,
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  if (isBlog) {
    const ogBanner = banner ? encodeURIComponent(banner.trim()) : undefined;

    return `https://og.clarence.link/api/blog?templateTitle=${ogTemplateTitle}&banner=${ogBanner}`;
  }

  return `https://og.clarence.link/api/gradient?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ""
  }`;
}
